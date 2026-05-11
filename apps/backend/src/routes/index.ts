import { Router } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import hubRoutes from "./hub.routes";
import talentRoutes from "./talent.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/hubs", hubRoutes);
router.use("/talent", talentRoutes);
router.use("/users", userRoutes);
// router.use("/programs", programRoutes);
// router.use("/events", eventRoutes);
// router.use("/newsletter", newsletterRoutes);
// router.use("/contact", contactRoutes);

export default router;
