import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { authenticatedOnly } from "../middleware/auth";
import type { HonoContext } from "../types";
import { bookings } from "../db/schema";
import { eq } from "drizzle-orm";

export const zoomRoutes = new Hono<HonoContext>()
  .use("*", authenticatedOnly)
  .post(
    "/create-meeting",
    zValidator(
      "json",
      z.object({
        bookingId: z.string(),
        topic: z.string(),
        startTime: z.string(),
      })
    ),
    async (c) => {
      const { bookingId, topic, startTime } = c.req.valid("json");
      const db = c.get("db");
      const env = c.env;

      if (!env.ZOOM_SDK_KEY || !env.ZOOM_SDK_SECRET || !env.ZOOM_ACCOUNT_ID) {
        return c.json(
          {
            error:
              "Zoom is not configured. Please set ZOOM_SDK_KEY, ZOOM_SDK_SECRET, and ZOOM_ACCOUNT_ID in your environment variables.",
            useFallback: true,
            fallbackUrl: "https://zoom.us/join",
          },
          500
        );
      }

      const booking = await db.query.bookings.findFirst({
        where: (bookings, { eq }) => eq(bookings.id, bookingId),
      });

      if (!booking) {
        return c.json({ error: "Booking not found" }, 404);
      }

      try {
        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + 60 * 60 * 2;

        const header = {
          alg: "HS256",
          typ: "JWT",
        };

        const payload = {
          sdkKey: env.ZOOM_SDK_KEY,
          mn: Math.floor(Math.random() * 1000000000),
          role: 1,
          iat,
          exp,
          appKey: env.ZOOM_SDK_KEY,
          tokenExp: exp,
        };

        const encodedHeader = btoa(JSON.stringify(header))
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");
        const encodedPayload = btoa(JSON.stringify(payload))
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");

        const encoder = new TextEncoder();
        const data = encoder.encode(`${encodedHeader}.${encodedPayload}`);
        const key = await crypto.subtle.importKey(
          "raw",
          encoder.encode(env.ZOOM_SDK_SECRET),
          { name: "HMAC", hash: "SHA-256" },
          false,
          ["sign"]
        );

        const signature = await crypto.subtle.sign("HMAC", key, data);
        const encodedSignature = btoa(
          String.fromCharCode(...new Uint8Array(signature))
        )
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");

        const sdkJWT = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;

        const zoomApiUrl = `https://api.zoom.us/v2/users/me/meetings`;
        const zoomApiToken = await generateZoomAccessToken(
          env.ZOOM_ACCOUNT_ID,
          env.ZOOM_SDK_KEY,
          env.ZOOM_SDK_SECRET
        );

        const meetingData = {
          topic,
          type: 2,
          start_time: startTime,
          duration: 60,
          timezone: "Australia/Sydney",
          settings: {
            host_video: true,
            participant_video: true,
            join_before_host: false,
            mute_upon_entry: false,
            approval_type: 0,
            audio: "both",
            auto_recording: "cloud",
          },
        };

        const zoomResponse = await fetch(zoomApiUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${zoomApiToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(meetingData),
        });

        if (!zoomResponse.ok) {
          const error = await zoomResponse.json();
          console.error("Zoom API error:", error);
          return c.json(
            {
              error: "Failed to create Zoom meeting",
              details: error,
              useFallback: true,
              sdkJWT,
            },
            500
          );
        }

        const zoomMeeting = await zoomResponse.json();

        await db
          .update(bookings)
          .set({
            zoomMeetingId: String(zoomMeeting.id),
            zoomJoinUrl: zoomMeeting.join_url,
            zoomPassword: zoomMeeting.password,
          })
          .where(eq(bookings.id, bookingId));

        return c.json({
          meetingId: zoomMeeting.id,
          joinUrl: zoomMeeting.join_url,
          password: zoomMeeting.password,
          sdkJWT,
        });
      } catch (error) {
        console.error("Failed to create Zoom meeting:", error);
        return c.json(
          {
            error: "Failed to create Zoom meeting",
            details: String(error),
            useFallback: true,
          },
          500
        );
      }
    }
  )
  .get(
    "/meeting/:id",
    zValidator("param", z.object({ id: z.string() })),
    async (c) => {
      const { id } = c.req.valid("param");
      const db = c.get("db");
      const user = c.get("user");

      const booking = await db.query.bookings.findFirst({
        where: (bookings, { eq }) => eq(bookings.id, id),
      });

      if (!booking) {
        return c.json({ error: "Booking not found" }, 404);
      }

      if (
        booking.userId !== user?.id &&
        booking.inspectorId !== user?.id &&
        user?.role !== "admin"
      ) {
        return c.json({ error: "Unauthorized" }, 403);
      }

      if (!booking.zoomMeetingId || !booking.zoomJoinUrl) {
        return c.json({ error: "Zoom meeting not created yet" }, 404);
      }

      return c.json({
        meetingId: booking.zoomMeetingId,
        joinUrl: booking.zoomJoinUrl,
        password: booking.zoomPassword,
      });
    }
  )
  .post(
    "/sdk-signature",
    zValidator(
      "json",
      z.object({
        meetingNumber: z.string(),
        role: z.number(),
      })
    ),
    async (c) => {
      const { meetingNumber, role } = c.req.valid("json");
      const env = c.env;

      if (!env.ZOOM_SDK_KEY || !env.ZOOM_SDK_SECRET) {
        return c.json({ error: "Zoom SDK not configured" }, 500);
      }

      try {
        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + 60 * 60 * 2;

        const header = {
          alg: "HS256",
          typ: "JWT",
        };

        const payload = {
          sdkKey: env.ZOOM_SDK_KEY,
          mn: meetingNumber,
          role,
          iat,
          exp,
          appKey: env.ZOOM_SDK_KEY,
          tokenExp: exp,
        };

        const encodedHeader = btoa(JSON.stringify(header))
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");
        const encodedPayload = btoa(JSON.stringify(payload))
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");

        const encoder = new TextEncoder();
        const data = encoder.encode(`${encodedHeader}.${encodedPayload}`);
        const key = await crypto.subtle.importKey(
          "raw",
          encoder.encode(env.ZOOM_SDK_SECRET),
          { name: "HMAC", hash: "SHA-256" },
          false,
          ["sign"]
        );

        const signature = await crypto.subtle.sign("HMAC", key, data);
        const encodedSignature = btoa(
          String.fromCharCode(...new Uint8Array(signature))
        )
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_");

        const sdkJWT = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;

        return c.json({ signature: sdkJWT });
      } catch (error) {
        console.error("Failed to generate Zoom SDK signature:", error);
        return c.json({ error: "Failed to generate signature" }, 500);
      }
    }
  );

async function generateZoomAccessToken(
  accountId: string,
  clientId: string,
  clientSecret: string
): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60;

  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    iss: clientId,
    exp,
  };

  const encodedHeader = btoa(JSON.stringify(header))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const encodedPayload = btoa(JSON.stringify(payload))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const encoder = new TextEncoder();
  const data = encoder.encode(`${encodedHeader}.${encodedPayload}`);
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(clientSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", key, data);
  const encodedSignature = btoa(
    String.fromCharCode(...new Uint8Array(signature))
  )
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}
