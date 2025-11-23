import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { authenticatedOnly } from "../middleware/auth";
import type { HonoContext } from "../types";
import { bookings, inspections } from "../db/schema";
import { eq, desc } from "drizzle-orm";

export const bookingRoutes = new Hono<HonoContext>()
  .post(
    "/",
    zValidator(
      "json",
      z.object({
        propertyAddress: z.string().min(1),
        propertyType: z.string().min(1),
        propertySize: z.string().optional(),
        contactName: z.string().min(1),
        contactEmail: z.string().email(),
        contactPhone: z.string().min(1),
        scheduledDate: z.string(),
        notes: z.string().optional(),
      })
    ),
    async (c) => {
      const db = c.get("db");
      const body = c.req.valid("json");
      const user = c.get("user");

      const bookingId = crypto.randomUUID();
      const scheduledDate = new Date(body.scheduledDate);

      await db.insert(bookings).values({
        id: bookingId,
        userId: user?.id,
        propertyAddress: body.propertyAddress,
        propertyType: body.propertyType,
        propertySize: body.propertySize || null,
        contactName: body.contactName,
        contactEmail: body.contactEmail,
        contactPhone: body.contactPhone,
        scheduledDate,
        notes: body.notes || null,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const inspectionId = crypto.randomUUID();
      await db.insert(inspections).values({
        id: inspectionId,
        bookingId,
        inspectorId: user?.id || "system",
        status: "scheduled",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return c.json({
        success: true,
        booking: { id: bookingId },
        inspection: { id: inspectionId },
      });
    }
  )
  .get("/", authenticatedOnly, async (c) => {
    const db = c.get("db");
    const user = c.get("user");

    let userBookings;
    if (user?.role === "admin") {
      userBookings = await db.select().from(bookings).orderBy(desc(bookings.createdAt));
    } else {
      userBookings = await db
        .select()
        .from(bookings)
        .where(eq(bookings.userId, user?.id || ""))
        .orderBy(desc(bookings.createdAt));
    }

    return c.json({ bookings: userBookings });
  })
  .get("/:id", authenticatedOnly, async (c) => {
    const db = c.get("db");
    const user = c.get("user");
    const { id } = c.req.param();

    const booking = await db.select().from(bookings).where(eq(bookings.id, id)).limit(1);

    if (!booking || booking.length === 0) {
      return c.json({ error: "Booking not found" }, 404);
    }

    if (user?.role !== "admin" && booking[0].userId !== user?.id) {
      return c.json({ error: "Unauthorized" }, 403);
    }

    return c.json({ booking: booking[0] });
  });
