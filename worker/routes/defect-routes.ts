import { Hono } from "hono";
import type { HonoContext } from "../types";
import { defectCategories, defectTypes } from "../db/schema";
import { eq } from "drizzle-orm";

export const defectRoutes = new Hono<HonoContext>()
  .get("/categories", async (c) => {
    const db = c.get("db");
    const categories = await db.select().from(defectCategories);
    return c.json({ categories });
  })
  .get("/types", async (c) => {
    const db = c.get("db");
    const types = await db.select().from(defectTypes);
    return c.json({ types });
  })
  .get("/types/:categoryId", async (c) => {
    const db = c.get("db");
    const { categoryId } = c.req.param();
    
    const types = await db
      .select()
      .from(defectTypes)
      .where(eq(defectTypes.categoryId, categoryId));
    
    return c.json({ types });
  })
  .post("/seed", async (c) => {
    const db = c.get("db");

    const categories = [
      {
        id: "cat-waterproofing",
        name: "Waterproofing",
        description: "Water ingress, dampness, and waterproofing failures",
        sortOrder: 1,
      },
      {
        id: "cat-fire-safety",
        name: "Fire Safety",
        description: "Fire protection systems and egress requirements",
        sortOrder: 2,
      },
      {
        id: "cat-structure",
        name: "Structure",
        description: "Foundation, walls, floors, and structural integrity",
        sortOrder: 3,
      },
      {
        id: "cat-building-enclosure",
        name: "Building Enclosure",
        description: "Roof, windows, doors, cladding, and external elements",
        sortOrder: 4,
      },
      {
        id: "cat-services",
        name: "Services",
        description: "Plumbing, electrical, HVAC, and drainage systems",
        sortOrder: 5,
      },
    ];

    for (const category of categories) {
      await db.insert(defectCategories).values(category).onConflictDoNothing();
    }

    const types = [
      {
        id: "wf-bathroom-leak",
        categoryId: "cat-waterproofing",
        name: "Bathroom Waterproofing Failure",
        description: "Water penetration through bathroom floor or walls",
        standardsReference: "AS 3740-2010 Waterproofing of domestic wet areas",
        severityLevel: "major",
        commonCauses: "Inadequate membrane, poor workmanship, cracked tiles",
        aiDetectionKeywords: "water stain, dampness, mold, tile crack, bathroom",
      },
      {
        id: "wf-balcony-leak",
        categoryId: "cat-waterproofing",
        name: "Balcony Water Ingress",
        description: "Water leaking from balcony into lower levels",
        standardsReference: "AS 3740-2010, NCC Section J",
        severityLevel: "critical",
        commonCauses: "Failed membrane, poor drainage, cracked substrate",
        aiDetectionKeywords: "balcony, water damage, ceiling stain, leak",
      },
      {
        id: "fs-smoke-alarm",
        categoryId: "cat-fire-safety",
        name: "Missing/Non-Compliant Smoke Alarms",
        description: "Inadequate smoke alarm coverage",
        standardsReference: "AS 3786-2014, NCC Volume 2 Part 3.7.2",
        severityLevel: "safety",
        commonCauses: "Not installed, expired, incorrect placement",
        aiDetectionKeywords: "smoke alarm, smoke detector, ceiling, safety",
      },
      {
        id: "st-foundation-crack",
        categoryId: "cat-structure",
        name: "Foundation Cracking",
        description: "Cracks in concrete slab or footings",
        standardsReference: "AS 2870-2011 Residential slabs and footings",
        severityLevel: "major",
        commonCauses: "Soil movement, poor compaction, inadequate reinforcement",
        aiDetectionKeywords: "crack, foundation, slab, concrete, floor",
      },
      {
        id: "st-wall-crack",
        categoryId: "cat-structure",
        name: "Structural Wall Cracks",
        description: "Significant cracking in load-bearing walls",
        standardsReference: "AS 3600-2018 Concrete structures",
        severityLevel: "critical",
        commonCauses: "Settlement, structural movement, inadequate support",
        aiDetectionKeywords: "wall crack, structural crack, vertical crack, diagonal crack",
      },
      {
        id: "be-roof-damage",
        categoryId: "cat-building-enclosure",
        name: "Roof Damage/Deterioration",
        description: "Damaged or deteriorated roofing materials",
        standardsReference: "AS 4046 series - Roof tiles",
        severityLevel: "major",
        commonCauses: "Age, storm damage, poor maintenance",
        aiDetectionKeywords: "roof, tile, shingle, damage, missing, deterioration",
      },
      {
        id: "be-gutter-overflow",
        categoryId: "cat-building-enclosure",
        name: "Inadequate Guttering",
        description: "Blocked or inadequate gutters causing overflow",
        standardsReference: "AS/NZS 3500.3 Stormwater drainage",
        severityLevel: "minor",
        commonCauses: "Blockage, undersized, incorrect fall",
        aiDetectionKeywords: "gutter, downpipe, overflow, blockage, leaves",
      },
      {
        id: "be-window-seal",
        categoryId: "cat-building-enclosure",
        name: "Window Seal Failure",
        description: "Failed seals around windows allowing water ingress",
        standardsReference: "AS 2047-2014 Windows in buildings",
        severityLevel: "major",
        commonCauses: "Age, poor installation, incorrect sealant",
        aiDetectionKeywords: "window, seal, water stain, frame, leak",
      },
      {
        id: "sv-plumbing-leak",
        categoryId: "cat-services",
        name: "Plumbing Leak",
        description: "Water leak from pipes or fixtures",
        standardsReference: "AS/NZS 3500.1 Plumbing and drainage",
        severityLevel: "major",
        commonCauses: "Corrosion, poor joints, damage",
        aiDetectionKeywords: "leak, pipe, plumbing, water damage, fixture",
      },
      {
        id: "sv-electrical-hazard",
        categoryId: "cat-services",
        name: "Electrical Safety Hazard",
        description: "Exposed wiring or unsafe electrical installation",
        standardsReference: "AS/NZS 3000 Electrical installations",
        severityLevel: "safety",
        commonCauses: "Poor workmanship, damage, non-compliant installation",
        aiDetectionKeywords: "exposed wire, electrical, outlet, switchboard, hazard",
      },
      {
        id: "sv-drainage-issue",
        categoryId: "cat-services",
        name: "Drainage Problems",
        description: "Blocked or inadequate drainage",
        standardsReference: "AS/NZS 3500.3 Stormwater drainage",
        severityLevel: "major",
        commonCauses: "Blockage, poor gradient, damage",
        aiDetectionKeywords: "drain, drainage, blockage, standing water, overflow",
      },
      {
        id: "st-timber-rot",
        categoryId: "cat-structure",
        name: "Timber Rot/Decay",
        description: "Deteriorated timber framing or structure",
        standardsReference: "AS 1684 Residential timber-framed construction",
        severityLevel: "critical",
        commonCauses: "Water damage, termites, lack of treatment",
        aiDetectionKeywords: "timber, rot, decay, wood damage, termite",
      },
      {
        id: "be-cladding-damage",
        categoryId: "cat-building-enclosure",
        name: "External Cladding Damage",
        description: "Damaged or deteriorated external cladding",
        standardsReference: "AS 3623 Domestic metal framing",
        severityLevel: "major",
        commonCauses: "Impact, corrosion, poor installation",
        aiDetectionKeywords: "cladding, external wall, siding, damage, deterioration",
      },
      {
        id: "wf-shower-leak",
        categoryId: "cat-waterproofing",
        name: "Shower Base Leak",
        description: "Water leaking from shower base",
        standardsReference: "AS 3740-2010",
        severityLevel: "major",
        commonCauses: "Failed waterproofing, cracked base, poor installation",
        aiDetectionKeywords: "shower, water damage, leak, bathroom floor, tile crack",
      },
      {
        id: "fs-fire-door",
        categoryId: "cat-fire-safety",
        name: "Fire Door Non-Compliance",
        description: "Fire doors not meeting code requirements",
        standardsReference: "AS 1905.1 Fire-resisting doors",
        severityLevel: "safety",
        commonCauses: "Damaged, propped open, incorrect hardware",
        aiDetectionKeywords: "fire door, door closer, self-closing, fire rating",
      },
    ];

    for (const type of types) {
      await db.insert(defectTypes).values(type).onConflictDoNothing();
    }

    return c.json({ success: true, message: "Defect database seeded with Australian standards" });
  });
