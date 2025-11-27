CREATE TABLE `defect_images` (
	`id` text PRIMARY KEY NOT NULL,
	`defect_id` text NOT NULL,
	`image_url` text NOT NULL,
	`caption` text,
	`uploaded_by` text,
	`uploaded_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	`order_index` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`defect_id`) REFERENCES `defects`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `defects` (
	`id` text PRIMARY KEY NOT NULL,
	`code` text NOT NULL,
	`title` text NOT NULL,
	`element` text NOT NULL,
	`system` text,
	`location_type` text,
	`is_residential` integer DEFAULT true,
	`is_commercial` integer DEFAULT false,
	`ncc_reference` text,
	`standard_reference` text,
	`state_applicability` text,
	`source_document` text,
	`summary_for_buyer` text,
	`technical_description` text,
	`possible_consequences` text,
	`recommended_rectification` text,
	`urgency` text,
	`risk_category` text,
	`ai_tags` text,
	`example_image_urls` text,
	`ai_confidence_threshold` real,
	`created_by` text,
	`updated_by` text,
	`created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	`version` integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `defects_code_unique` ON `defects` (`code`);--> statement-breakpoint
DROP TABLE `defect_categories`;--> statement-breakpoint
DROP TABLE `defect_types`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_inspection_defects` (
	`id` text PRIMARY KEY NOT NULL,
	`inspection_id` text NOT NULL,
	`defect_id` text,
	`custom_defect_name` text,
	`location` text NOT NULL,
	`severity` text NOT NULL,
	`description` text NOT NULL,
	`photo_url` text,
	`standards_reference` text,
	`recommended_action` text,
	`estimated_cost` text,
	`ai_detected` integer DEFAULT false,
	`ai_confidence` real,
	`created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	FOREIGN KEY (`inspection_id`) REFERENCES `inspections`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`defect_id`) REFERENCES `defects`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_inspection_defects`("id", "inspection_id", "defect_id", "custom_defect_name", "location", "severity", "description", "photo_url", "standards_reference", "recommended_action", "estimated_cost", "ai_detected", "ai_confidence", "created_at") SELECT "id", "inspection_id", "defect_id", "custom_defect_name", "location", "severity", "description", "photo_url", "standards_reference", "recommended_action", "estimated_cost", "ai_detected", "ai_confidence", "created_at" FROM `inspection_defects`;--> statement-breakpoint
DROP TABLE `inspection_defects`;--> statement-breakpoint
ALTER TABLE `__new_inspection_defects` RENAME TO `inspection_defects`;--> statement-breakpoint
PRAGMA foreign_keys=ON;