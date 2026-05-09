import { Router } from "express";
import authRoutes from "./auth.routes";
import hubRoutes from "./hub.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/hubs", hubRoutes);
// router.use("/programs", programRoutes);
// router.use("/events", eventRoutes);
// router.use("/newsletter", newsletterRoutes);
// router.use("/contact", contactRoutes);

export default router;
