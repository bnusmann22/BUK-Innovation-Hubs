import { Router } from "express";
import userRoutes from "./user.routes";

const router = Router();

router.use("/users", userRoutes);

// router.use("/auth", authRoutes);
// router.use("/hubs", hubRoutes);
// router.use("/programs", programRoutes);
// router.use("/events", eventRoutes);
// router.use("/newsletter", newsletterRoutes);
// router.use("/contact", contactRoutes);

export default router;
