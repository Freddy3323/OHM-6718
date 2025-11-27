import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { requireAdmin } from "../middleware/auth";
import type { HonoContext } from "../types";
import { defects, defectImages } from "../db/schema";
import { eq, like, or, and, sql, desc, asc } from "drizzle-orm";

export const defectRoutes = new Hono<HonoContext>()
  .get("/api/defects", async (c) => {
    const db = c.get("db");
    const { element, risk_category, state, ai_tag, search, limit = "50", offset = "0" } = c.req.query();

    let query = db.select().from(defects);
    const conditions = [];

    if (element) {
      conditions.push(eq(defects.element, element as any));
    }
    if (risk_category) {
      conditions.push(eq(defects.riskCategory, risk_category as any));
    }
    if (state && state.trim()) {
      conditions.push(sql`json_extract(${defects.stateApplicability}, '$') LIKE '%${state}%'`);
    }
    if (ai_tag && ai_tag.trim()) {
      conditions.push(sql`json_extract(${defects.aiTags}, '$') LIKE '%${ai_tag}%'`);
    }
    if (search && search.trim()) {
      conditions.push(
        or(
          like(defects.title, `%${search}%`),
          like(defects.code, `%${search}%`),
          like(defects.technicalDescription, `%${search}%`)
        )
      );
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    const results = await query
      .limit(parseInt(limit))
      .offset(parseInt(offset))
      .orderBy(desc(defects.createdAt));

    const countQuery = conditions.length > 0
      ? db.select({ count: sql<number>`count(*)` }).from(defects).where(and(...conditions))
      : db.select({ count: sql<number>`count(*)` }).from(defects);

    const [{ count }] = await countQuery;

    return c.json({
      defects: results,
      total: count,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
  })
  .get("/api/defects/:id", async (c) => {
    const db = c.get("db");
    const id = c.req.param("id");

    const defect = await db.select().from(defects).where(eq(defects.id, id)).get();

    if (!defect) {
      return c.json({ error: "Defect not found" }, 404);
    }

    const images = await db.select().from(defectImages).where(eq(defectImages.defectId, id)).orderBy(asc(defectImages.orderIndex));

    return c.json({
      ...defect,
      images,
    });
  })
  .get("/api/defects/search/ai", async (c) => {
    const db = c.get("db");
    const tags = c.req.queries("ai_tag") || [];

    if (tags.length === 0) {
      return c.json({ defects: [] });
    }

    const conditions = tags.map(tag => 
      sql`json_extract(${defects.aiTags}, '$') LIKE '%${tag}%'`
    );

    const results = await db
      .select({
        id: defects.id,
        code: defects.code,
        title: defects.title,
        summaryForBuyer: defects.summaryForBuyer,
        technicalDescription: defects.technicalDescription,
        aiTags: defects.aiTags,
      })
      .from(defects)
      .where(or(...conditions));

    return c.json({ defects: results });
  })
  .use("/api/admin/defects/*", requireAdmin)
  .get("/api/admin/defects", async (c) => {
    const db = c.get("db");
    const { element, urgency, risk_category, state, search, sort = "created_at", order = "desc" } = c.req.query();

    let query = db.select().from(defects);
    const conditions = [];

    if (element) conditions.push(eq(defects.element, element as any));
    if (urgency) conditions.push(eq(defects.urgency, urgency as any));
    if (risk_category) conditions.push(eq(defects.riskCategory, risk_category as any));
    if (state) conditions.push(sql`json_extract(${defects.stateApplicability}, '$') LIKE '%${state}%'`);
    if (search) {
      conditions.push(
        or(
          like(defects.title, `%${search}%`),
          like(defects.code, `%${search}%`),
          sql`json_extract(${defects.aiTags}, '$') LIKE '%${search}%'`
        )
      );
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    const orderFn = order === "asc" ? asc : desc;
    const results = await query.orderBy(orderFn(defects[sort as keyof typeof defects]));

    return c.json({ defects: results });
  })
  .post(
    "/api/admin/defects",
    zValidator(
      "json",
      z.object({
        code: z.string().min(1),
        title: z.string().min(1),
        element: z.enum(["waterproofing", "fire_safety", "structure", "building_enclosure", "services"]),
        system: z.string().optional(),
        locationType: z.string().optional(),
        isResidential: z.boolean().default(true),
        isCommercial: z.boolean().default(false),
        nccReference: z.string().optional(),
        standardReference: z.string().optional(),
        stateApplicability: z.array(z.string()).optional(),
        sourceDocument: z.string().optional(),
        summaryForBuyer: z.string().optional(),
        technicalDescription: z.string().optional(),
        possibleConsequences: z.string().optional(),
        recommendedRectification: z.string().optional(),
        urgency: z.enum(["immediate", "urgent", "moderate", "low", "cosmetic"]).optional(),
        riskCategory: z.enum(["safety", "major", "minor", "compliance"]).optional(),
        aiTags: z.array(z.string()).optional(),
        exampleImageUrls: z.array(z.string()).optional(),
        aiConfidenceThreshold: z.number().optional(),
      })
    ),
    async (c) => {
      const db = c.get("db");
      const user = c.get("user");
      const data = c.req.valid("json");

      const existing = await db.select().from(defects).where(eq(defects.code, data.code)).get();
      if (existing) {
        return c.json({ error: "Defect with this code already exists" }, 400);
      }

      const id = crypto.randomUUID();
      await db.insert(defects).values({
        id,
        ...data,
        createdBy: user?.id,
        updatedBy: user?.id,
      });

      const defect = await db.select().from(defects).where(eq(defects.id, id)).get();
      return c.json(defect, 201);
    }
  )
  .put(
    "/api/admin/defects/:id",
    zValidator(
      "json",
      z.object({
        code: z.string().min(1).optional(),
        title: z.string().min(1).optional(),
        element: z.enum(["waterproofing", "fire_safety", "structure", "building_enclosure", "services"]).optional(),
        system: z.string().optional(),
        locationType: z.string().optional(),
        isResidential: z.boolean().optional(),
        isCommercial: z.boolean().optional(),
        nccReference: z.string().optional(),
        standardReference: z.string().optional(),
        stateApplicability: z.array(z.string()).optional(),
        sourceDocument: z.string().optional(),
        summaryForBuyer: z.string().optional(),
        technicalDescription: z.string().optional(),
        possibleConsequences: z.string().optional(),
        recommendedRectification: z.string().optional(),
        urgency: z.enum(["immediate", "urgent", "moderate", "low", "cosmetic"]).optional(),
        riskCategory: z.enum(["safety", "major", "minor", "compliance"]).optional(),
        aiTags: z.array(z.string()).optional(),
        exampleImageUrls: z.array(z.string()).optional(),
        aiConfidenceThreshold: z.number().optional(),
      })
    ),
    async (c) => {
      const db = c.get("db");
      const user = c.get("user");
      const id = c.req.param("id");
      const data = c.req.valid("json");

      const existing = await db.select().from(defects).where(eq(defects.id, id)).get();
      if (!existing) {
        return c.json({ error: "Defect not found" }, 404);
      }

      await db
        .update(defects)
        .set({
          ...data,
          updatedBy: user?.id,
          version: existing.version + 1,
        })
        .where(eq(defects.id, id));

      const defect = await db.select().from(defects).where(eq(defects.id, id)).get();
      return c.json(defect);
    }
  )
  .delete("/api/admin/defects/:id", async (c) => {
    const db = c.get("db");
    const id = c.req.param("id");

    const existing = await db.select().from(defects).where(eq(defects.id, id)).get();
    if (!existing) {
      return c.json({ error: "Defect not found" }, 404);
    }

    await db.delete(defects).where(eq(defects.id, id));
    return c.json({ success: true });
  })
  .post("/api/admin/defects/bulk-delete", zValidator("json", z.object({ ids: z.array(z.string()) })), async (c) => {
    const db = c.get("db");
    const { ids } = c.req.valid("json");

    for (const id of ids) {
      await db.delete(defects).where(eq(defects.id, id));
    }

    return c.json({ success: true, deleted: ids.length });
  })
  .get("/api/admin/defects/export/json", async (c) => {
    const db = c.get("db");
    const results = await db.select().from(defects).orderBy(asc(defects.code));

    const timestamp = new Date().toISOString().split("T")[0];
    c.header("Content-Disposition", `attachment; filename="defects-${timestamp}.json"`);
    c.header("Content-Type", "application/json");
    
    return c.json(results);
  })
  .get("/api/admin/defects/export/csv", async (c) => {
    const db = c.get("db");
    const results = await db.select().from(defects).orderBy(asc(defects.code));

    const headers = [
      "code", "title", "element", "system", "locationType", "isResidential", "isCommercial",
      "nccReference", "standardReference", "stateApplicability", "sourceDocument",
      "summaryForBuyer", "technicalDescription", "possibleConsequences", "recommendedRectification",
      "urgency", "riskCategory", "aiTags", "aiConfidenceThreshold"
    ];

    const csvRows = [headers.join(",")];
    
    for (const row of results) {
      const values = headers.map(header => {
        const value = row[header as keyof typeof row];
        if (value === null || value === undefined) return "";
        if (Array.isArray(value)) return `"${value.join(";")}"`;
        if (typeof value === "string" && value.includes(",")) return `"${value}"`;
        return value;
      });
      csvRows.push(values.join(","));
    }

    const csv = csvRows.join("\n");
    const timestamp = new Date().toISOString().split("T")[0];
    
    c.header("Content-Disposition", `attachment; filename="defects-${timestamp}.csv"`);
    c.header("Content-Type", "text/csv");
    
    return c.text(csv);
  })
  .post(
    "/api/admin/defects/import/csv",
    async (c) => {
      const db = c.get("db");
      const user = c.get("user");
      const body = await c.req.parseBody();
      const file = body.file as File;

      if (!file) {
        return c.json({ error: "No file provided" }, 400);
      }

      const text = await file.text();
      const lines = text.split("\n").filter(line => line.trim());
      const headers = lines[0].split(",").map(h => h.trim());
      
      const imported = [];
      const errors = [];

      for (let i = 1; i < lines.length; i++) {
        try {
          const values = lines[i].split(",");
          const row: any = {};
          
          headers.forEach((header, index) => {
            let value = values[index]?.trim() || "";
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.slice(1, -1);
            }
            
            if (header === "stateApplicability" || header === "aiTags") {
              row[header] = value ? value.split(";") : [];
            } else if (header === "isResidential" || header === "isCommercial") {
              row[header] = value === "true" || value === "1";
            } else if (header === "aiConfidenceThreshold") {
              row[header] = value ? parseFloat(value) : null;
            } else {
              row[header] = value || null;
            }
          });

          if (!row.code) {
            errors.push({ row: i + 1, error: "Missing code" });
            continue;
          }

          const existing = await db.select().from(defects).where(eq(defects.code, row.code)).get();
          
          if (existing) {
            await db.update(defects).set({
              ...row,
              updatedBy: user?.id,
              version: existing.version + 1,
            }).where(eq(defects.id, existing.id));
            imported.push({ code: row.code, action: "updated" });
          } else {
            const id = crypto.randomUUID();
            await db.insert(defects).values({
              id,
              ...row,
              createdBy: user?.id,
              updatedBy: user?.id,
            });
            imported.push({ code: row.code, action: "created" });
          }
        } catch (error) {
          errors.push({ row: i + 1, error: String(error) });
        }
      }

      return c.json({
        success: true,
        imported: imported.length,
        errors: errors.length,
        details: { imported, errors },
      });
    }
  );
