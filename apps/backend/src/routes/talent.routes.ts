import { Router } from "express";
import { submit, list } from "../controllers/talent.controller";
import { validate } from "../middlewares/validate.middleware";
import { submitTalentSchema } from "../validators/talent.validator";
import { verifyToken } from "../middlewares/verifytoken";
import { requireRoles } from "../middlewares/rbac.middleware";
import { Role } from "../generated/prisma/enums";

const talentRouter = Router();

// Public — anyone can submit a talent profile
talentRouter.post("/", validate(submitTalentSchema), submit);

// Protected — admins only
talentRouter.get("/", verifyToken, requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER), list);

export default talentRouter;
