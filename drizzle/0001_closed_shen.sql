CREATE TABLE `bookings` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text,
	`property_address` text NOT NULL,
	`property_type` text NOT NULL,
	`property_size` text,
	`contact_name` text NOT NULL,
	`contact_email` text NOT NULL,
	`contact_phone` text NOT NULL,
	`scheduled_date` integer NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`notes` text,
	`inspector_id` text,
	`zoom_meeting_id` text,
	`zoom_join_url` text,
	`created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`inspector_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `defect_categories` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`sort_order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `defect_types` (
	`id` text PRIMARY KEY NOT NULL,
	`category_id` text NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`standards_reference` text,
	`severity_level` text,
	`common_causes` text,
	`ai_detection_keywords` text,
	FOREIGN KEY (`category_id`) REFERENCES `defect_categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `inspection_defects` (
	`id` text PRIMARY KEY NOT NULL,
	`inspection_id` text NOT NULL,
	`defect_type_id` text,
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
	FOREIGN KEY (`defect_type_id`) REFERENCES `defect_types`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `inspections` (
	`id` text PRIMARY KEY NOT NULL,
	`booking_id` text NOT NULL,
	`inspector_id` text NOT NULL,
	`status` text DEFAULT 'scheduled' NOT NULL,
	`started_at` integer,
	`completed_at` integer,
	`zoom_recording_url` text,
	`report_url` text,
	`notes` text,
	`created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	FOREIGN KEY (`booking_id`) REFERENCES `bookings`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`inspector_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `reports` (
	`id` text PRIMARY KEY NOT NULL,
	`inspection_id` text NOT NULL,
	`report_type` text DEFAULT 'full' NOT NULL,
	`pdf_url` text,
	`html_content` text,
	`summary` text,
	`total_defects` integer DEFAULT 0,
	`major_defects` integer DEFAULT 0,
	`minor_defects` integer DEFAULT 0,
	`safety_hazards` integer DEFAULT 0,
	`generated_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	`sent_at` integer,
	`created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	FOREIGN KEY (`inspection_id`) REFERENCES `inspections`(`id`) ON UPDATE no action ON DELETE cascade
);
