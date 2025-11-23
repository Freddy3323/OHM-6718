import { Hono } from "hono";
import type { HonoContext } from "../types";
import { adminRoutes } from "./admin-routes";
import { aiRoutes } from "./ai-routes";
import { authRoutes } from "./auth-routes";
import { bookingRoutes } from "./booking-routes";
import { inspectionRoutes } from "./inspection-routes";
import { defectRoutes } from "./defect-routes";

export const apiRoutes = new Hono<HonoContext>()
.route("/admin", adminRoutes)
.route("/ai", aiRoutes)
.route("/auth", authRoutes)
.route("/bookings", bookingRoutes)
.route("/inspections", inspectionRoutes)
.route("/defects", defectRoutes)