import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { authenticatedOnly, requireAdmin } from "../middleware/auth";
import type { HonoContext } from "../types";
import { inspections, inspectionDefects } from "../db/schema";
import { eq, desc } from "drizzle-orm";

export const inspectionRoutes = new Hono<HonoContext>()
  .get("/", authenticatedOnly, async (c) => {
    const db = c.get("db");
    const user = c.get("user");

    let userInspections;
    if (user?.role === "admin") {
      userInspections = await db.select().from(inspections).orderBy(desc(inspections.createdAt));
    } else {
      userInspections = await db
        .select()
        .from(inspections)
        .where(eq(inspections.inspectorId, user?.id || ""))
        .orderBy(desc(inspections.createdAt));
    }

    return c.json({ inspections: userInspections });
  })
  .get("/:id", authenticatedOnly, async (c) => {
    const db = c.get("db");
    const { id } = c.req.param();

    const inspection = await db.select().from(inspections).where(eq(inspections.id, id)).limit(1);

    if (!inspection || inspection.length === 0) {
      return c.json({ error: "Inspection not found" }, 404);
    }

    return c.json({ inspection: inspection[0] });
  })
  .post("/:id/start", requireAdmin, async (c) => {
    const db = c.get("db");
    const { id } = c.req.param();

    const inspection = await db.select().from(inspections).where(eq(inspections.id, id)).limit(1);

    if (!inspection || inspection.length === 0) {
      return c.json({ error: "Inspection not found" }, 404);
    }

    await db
      .update(inspections)
      .set({
        status: "in_progress",
        startedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(inspections.id, id));

    return c.json({ success: true });
  })
  .post("/:id/complete", requireAdmin, async (c) => {
    const db = c.get("db");
    const { id } = c.req.param();

    await db
      .update(inspections)
      .set({
        status: "completed",
        completedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(inspections.id, id));

    return c.json({ success: true });
  })
  .get("/:id/defects", authenticatedOnly, async (c) => {
    const db = c.get("db");
    const { id } = c.req.param();

    const defects = await db
      .select()
      .from(inspectionDefects)
      .where(eq(inspectionDefects.inspectionId, id))
      .orderBy(desc(inspectionDefects.createdAt));

    return c.json({ defects });
  })
  .post(
    "/:id/defects",
    requireAdmin,
    zValidator(
      "json",
      z.object({
        defectTypeId: z.string().optional(),
        customDefectName: z.string().optional(),
        location: z.string().min(1),
        severity: z.enum(["minor", "major", "critical", "safety"]),
        description: z.string().min(1),
        standardsReference: z.string().optional(),
        recommendedAction: z.string().optional(),
        estimatedCost: z.string().optional(),
        photoUrl: z.string().optional(),
        aiDetected: z.boolean().optional(),
        aiConfidence: z.number().optional(),
      })
    ),
    async (c) => {
      const db = c.get("db");
      const { id } = c.req.param();
      const body = c.req.valid("json");

      const defectId = crypto.randomUUID();

      await db.insert(inspectionDefects).values({
        id: defectId,
        inspectionId: id,
        defectTypeId: body.defectTypeId || null,
        customDefectName: body.customDefectName || null,
        location: body.location,
        severity: body.severity,
        description: body.description,
        standardsReference: body.standardsReference || null,
        recommendedAction: body.recommendedAction || null,
        estimatedCost: body.estimatedCost || null,
        photoUrl: body.photoUrl || null,
        aiDetected: body.aiDetected || false,
        aiConfidence: body.aiConfidence || null,
        createdAt: new Date(),
      });

      return c.json({ success: true, defect: { id: defectId } });
    }
  );
