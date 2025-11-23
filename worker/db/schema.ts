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

export const defectCategories = sqliteTable("defect_categories", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  sortOrder: integer("sort_order").default(0),
});

export const defectTypes = sqliteTable("defect_types", {
  id: text("id").primaryKey(),
  categoryId: text("category_id").references(() => defectCategories.id).notNull(),
  name: text("name").notNull(),
  description: text("description"),
  standardsReference: text("standards_reference"),
  severityLevel: text("severity_level"),
  commonCauses: text("common_causes"),
  aiDetectionKeywords: text("ai_detection_keywords"),
});

export const inspectionDefects = sqliteTable("inspection_defects", {
  id: text("id").primaryKey(),
  inspectionId: text("inspection_id").references(() => inspections.id, { onDelete: "cascade" }).notNull(),
  defectTypeId: text("defect_type_id").references(() => defectTypes.id),
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
