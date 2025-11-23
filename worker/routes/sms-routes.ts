import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { authenticatedOnly } from "../middleware/auth";
import type { HonoContext } from "../types";

export const smsRoutes = new Hono<HonoContext>()
  .use("*", authenticatedOnly)
  .post(
    "/send",
    zValidator(
      "json",
      z.object({
        to: z.string().min(1),
        message: z.string().min(1),
      })
    ),
    async (c) => {
      const { to, message } = c.req.valid("json");
      const env = c.env;

      if (
        !env.TWILIO_ACCOUNT_SID ||
        !env.TWILIO_AUTH_TOKEN ||
        !env.TWILIO_PHONE_NUMBER
      ) {
        return c.json(
          {
            error:
              "Twilio is not configured. Please set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER in your environment variables.",
          },
          500
        );
      }

      try {
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
        const auth = btoa(
          `${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`
        );

        const formData = new URLSearchParams();
        formData.append("To", to);
        formData.append("From", env.TWILIO_PHONE_NUMBER);
        formData.append("Body", message);

        const response = await fetch(twilioUrl, {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Twilio API error:", error);
          return c.json({ error: "Failed to send SMS", details: error }, 500);
        }

        const result = await response.json();
        return c.json({ success: true, messageId: result.sid });
      } catch (error) {
        console.error("Failed to send SMS:", error);
        return c.json(
          { error: "Failed to send SMS", details: String(error) },
          500
        );
      }
    }
  )
  .post(
    "/booking-confirmation",
    zValidator(
      "json",
      z.object({
        bookingId: z.string(),
      })
    ),
    async (c) => {
      const { bookingId } = c.req.valid("json");
      const db = c.get("db");

      const booking = await db.query.bookings.findFirst({
        where: (bookings, { eq }) => eq(bookings.id, bookingId),
      });

      if (!booking) {
        return c.json({ error: "Booking not found" }, 404);
      }

      const scheduledDate = new Date(booking.scheduledDate);
      const formattedDate = scheduledDate.toLocaleDateString("en-AU", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = scheduledDate.toLocaleTimeString("en-AU", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const message = `Thanks for booking with OpenHomeMate! Your inspection is scheduled for ${formattedDate} at ${formattedTime}. Property: ${booking.propertyAddress}. We'll send your Zoom link 24 hours before.`;

      const env = c.env;
      if (
        !env.TWILIO_ACCOUNT_SID ||
        !env.TWILIO_AUTH_TOKEN ||
        !env.TWILIO_PHONE_NUMBER
      ) {
        return c.json({ error: "Twilio not configured" }, 500);
      }

      try {
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
        const auth = btoa(
          `${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`
        );

        const formData = new URLSearchParams();
        formData.append("To", booking.contactPhone);
        formData.append("From", env.TWILIO_PHONE_NUMBER);
        formData.append("Body", message);

        const response = await fetch(twilioUrl, {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Twilio API error:", error);
          return c.json({ error: "Failed to send SMS" }, 500);
        }

        const result = await response.json();
        return c.json({ success: true, messageId: result.sid });
      } catch (error) {
        console.error("Failed to send SMS:", error);
        return c.json({ error: "Failed to send SMS" }, 500);
      }
    }
  )
  .post(
    "/zoom-link",
    zValidator(
      "json",
      z.object({
        bookingId: z.string(),
      })
    ),
    async (c) => {
      const { bookingId } = c.req.valid("json");
      const db = c.get("db");

      const booking = await db.query.bookings.findFirst({
        where: (bookings, { eq }) => eq(bookings.id, bookingId),
      });

      if (!booking) {
        return c.json({ error: "Booking not found" }, 404);
      }

      if (!booking.zoomJoinUrl) {
        return c.json({ error: "Zoom link not available" }, 400);
      }

      const scheduledDate = new Date(booking.scheduledDate);
      const formattedDate = scheduledDate.toLocaleDateString("en-AU", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });

      const message = `Your OpenHomeMate inspection is tomorrow! Join via Zoom: ${booking.zoomJoinUrl}${booking.zoomMeetingId ? `. Meeting ID: ${booking.zoomMeetingId}` : ""}. Need help? Visit openhousemate.com`;

      const env = c.env;
      if (
        !env.TWILIO_ACCOUNT_SID ||
        !env.TWILIO_AUTH_TOKEN ||
        !env.TWILIO_PHONE_NUMBER
      ) {
        return c.json({ error: "Twilio not configured" }, 500);
      }

      try {
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
        const auth = btoa(
          `${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`
        );

        const formData = new URLSearchParams();
        formData.append("To", booking.contactPhone);
        formData.append("From", env.TWILIO_PHONE_NUMBER);
        formData.append("Body", message);

        const response = await fetch(twilioUrl, {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Twilio API error:", error);
          return c.json({ error: "Failed to send SMS" }, 500);
        }

        const result = await response.json();
        return c.json({ success: true, messageId: result.sid });
      } catch (error) {
        console.error("Failed to send SMS:", error);
        return c.json({ error: "Failed to send SMS" }, 500);
      }
    }
  )
  .post(
    "/reminder",
    zValidator(
      "json",
      z.object({
        bookingId: z.string(),
      })
    ),
    async (c) => {
      const { bookingId } = c.req.valid("json");
      const db = c.get("db");

      const booking = await db.query.bookings.findFirst({
        where: (bookings, { eq }) => eq(bookings.id, bookingId),
      });

      if (!booking) {
        return c.json({ error: "Booking not found" }, 404);
      }

      if (!booking.zoomJoinUrl) {
        return c.json({ error: "Zoom link not available" }, 400);
      }

      const message = `Reminder: Your building inspection starts in 1 hour. Join Zoom: ${booking.zoomJoinUrl}`;

      const env = c.env;
      if (
        !env.TWILIO_ACCOUNT_SID ||
        !env.TWILIO_AUTH_TOKEN ||
        !env.TWILIO_PHONE_NUMBER
      ) {
        return c.json({ error: "Twilio not configured" }, 500);
      }

      try {
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
        const auth = btoa(
          `${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`
        );

        const formData = new URLSearchParams();
        formData.append("To", booking.contactPhone);
        formData.append("From", env.TWILIO_PHONE_NUMBER);
        formData.append("Body", message);

        const response = await fetch(twilioUrl, {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Twilio API error:", error);
          return c.json({ error: "Failed to send SMS" }, 500);
        }

        const result = await response.json();
        return c.json({ success: true, messageId: result.sid });
      } catch (error) {
        console.error("Failed to send SMS:", error);
        return c.json({ error: "Failed to send SMS" }, 500);
      }
    }
  )
  .post(
    "/report-ready",
    zValidator(
      "json",
      z.object({
        bookingId: z.string(),
        reportUrl: z.string(),
      })
    ),
    async (c) => {
      const { bookingId, reportUrl } = c.req.valid("json");
      const db = c.get("db");

      const booking = await db.query.bookings.findFirst({
        where: (bookings, { eq }) => eq(bookings.id, bookingId),
      });

      if (!booking) {
        return c.json({ error: "Booking not found" }, 404);
      }

      const message = `Your inspection report is ready! Download: ${reportUrl}`;

      const env = c.env;
      if (
        !env.TWILIO_ACCOUNT_SID ||
        !env.TWILIO_AUTH_TOKEN ||
        !env.TWILIO_PHONE_NUMBER
      ) {
        return c.json({ error: "Twilio not configured" }, 500);
      }

      try {
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
        const auth = btoa(
          `${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`
        );

        const formData = new URLSearchParams();
        formData.append("To", booking.contactPhone);
        formData.append("From", env.TWILIO_PHONE_NUMBER);
        formData.append("Body", message);

        const response = await fetch(twilioUrl, {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("Twilio API error:", error);
          return c.json({ error: "Failed to send SMS" }, 500);
        }

        const result = await response.json();
        return c.json({ success: true, messageId: result.sid });
      } catch (error) {
        console.error("Failed to send SMS:", error);
        return c.json({ error: "Failed to send SMS" }, 500);
      }
    }
  );
