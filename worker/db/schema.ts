export * from "./auth-schema";

import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";
import { users } from "./auth-schema";

export const bookings = sqliteTable("bookings", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  propertyAddress: text("property_address").notNull(),
  propertyType: text("property_type").notNull(),
  propertySize: text("property_size"),
  contactName: text("contact_name").notNull(),
  contactEmail: text("contact_email").notNull(),
  contactPhone: text("contact_phone").notNull(),
  scheduledDate: integer("scheduled_date", { mode: "timestamp" }).notNull(),
  status: text("status").notNull().default("pending"),
  notes: text("notes"),
  inspectorId: text("inspector_id").references(() => users.id),
  zoomMeetingId: text("zoom_meeting_id"),
  zoomJoinUrl: text("zoom_join_url"),
  zoomPassword: text("zoom_password"),
  smsNotificationsSent: integer("sms_notifications_sent", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow().notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).defaultNow().$onUpdate(() => new Date()).notNull(),
});

export const inspections = sqliteTable("inspections", {
  id: text("id").primaryKey(),
  bookingId: text("booking_id").references(() => bookings.id, { onDelete: "cascade" }).notNull(),
  inspectorId: text("inspector_id").references(() => users.id).notNull(),
  status: text("status").notNull().default("scheduled"),
  startedAt: integer("started_at", { mode: "timestamp" }),
  completedAt: integer("completed_at", { mode: "timestamp" }),
  zoomRecordingUrl: text("zoom_recording_url"),
  reportUrl: text("report_url"),
  notes: text("notes"),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow().notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).defaultNow().$onUpdate(() => new Date()).notNull(),
});

export const defects = sqliteTable("defects", {
  id: text("id").primaryKey(),
  code: text("code").notNull().unique(),
  title: text("title").notNull(),
  element: text("element", { enum: ["waterproofing", "fire_safety", "structure", "building_enclosure", "services"] }).notNull(),
  system: text("system"),
  locationType: text("location_type"),
  isResidential: integer("is_residential", { mode: "boolean" }).default(true),
  isCommercial: integer("is_commercial", { mode: "boolean" }).default(false),
  nccReference: text("ncc_reference"),
  standardReference: text("standard_reference"),
  stateApplicability: text("state_applicability", { mode: "json" }).$type<string[]>(),
  sourceDocument: text("source_document"),
  summaryForBuyer: text("summary_for_buyer"),
  technicalDescription: text("technical_description"),
  possibleConsequences: text("possible_consequences"),
  recommendedRectification: text("recommended_rectification"),
  urgency: text("urgency", { enum: ["immediate", "urgent", "moderate", "low", "cosmetic"] }),
  riskCategory: text("risk_category", { enum: ["safety", "major", "minor", "compliance"] }),
  aiTags: text("ai_tags", { mode: "json" }).$type<string[]>(),
  exampleImageUrls: text("example_image_urls", { mode: "json" }).$type<string[]>(),
  aiConfidenceThreshold: real("ai_confidence_threshold"),
  createdBy: text("created_by"),
  updatedBy: text("updated_by"),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow().notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).defaultNow().$onUpdate(() => new Date()).notNull(),
  version: integer("version").default(1).notNull(),
});

export const defectImages = sqliteTable("defect_images", {
  id: text("id").primaryKey(),
  defectId: text("defect_id").references(() => defects.id, { onDelete: "cascade" }).notNull(),
  imageUrl: text("image_url").notNull(),
  caption: text("caption"),
  uploadedBy: text("uploaded_by"),
  uploadedAt: integer("uploaded_at", { mode: "timestamp" }).defaultNow().notNull(),
  orderIndex: integer("order_index").notNull().default(0),
});

export const inspectionDefects = sqliteTable("inspection_defects", {
  id: text("id").primaryKey(),
  inspectionId: text("inspection_id").references(() => inspections.id, { onDelete: "cascade" }).notNull(),
  defectId: text("defect_id").references(() => defects.id),
  customDefectName: text("custom_defect_name"),
  location: text("location").notNull(),
  severity: text("severity").notNull(),
  description: text("description").notNull(),
  photoUrl: text("photo_url"),
  standardsReference: text("standards_reference"),
  recommendedAction: text("recommended_action"),
  estimatedCost: text("estimated_cost"),
  aiDetected: integer("ai_detected", { mode: "boolean" }).default(false),
  aiConfidence: real("ai_confidence"),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow().notNull(),
});

export const reports = sqliteTable("reports", {
  id: text("id").primaryKey(),
  inspectionId: text("inspection_id").references(() => inspections.id, { onDelete: "cascade" }).notNull(),
  reportType: text("report_type").notNull().default("full"),
  pdfUrl: text("pdf_url"),
  htmlContent: text("html_content"),
  summary: text("summary"),
  totalDefects: integer("total_defects").default(0),
  majorDefects: integer("major_defects").default(0),
  minorDefects: integer("minor_defects").default(0),
  safetyHazards: integer("safety_hazards").default(0),
  generatedAt: integer("generated_at", { mode: "timestamp" }).defaultNow().notNull(),
  sentAt: integer("sent_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow().notNull(),
});
