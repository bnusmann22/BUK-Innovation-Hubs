import { Router } from "express";
import { verifyToken } from "../middlewares/verifytoken";
import { requireRoles } from "../middlewares/rbac.middleware";
import { Role } from "../generated/prisma/enums";
import { validate } from "../middlewares/validate.middleware";
import { createHubSchema } from "../validators/hub.validator";
import { createHubHandler, getAllHubsHandler, getHubByIdHandler } from "../controllers/hub.controller";

const hubRouter = Router();

hubRouter.get("/", verifyToken, requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER), getAllHubsHandler);
hubRouter.get("/:id", verifyToken, requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER), getHubByIdHandler);
hubRouter.post("/", verifyToken, requireRoles(Role.SUPER_ADMIN), validate(createHubSchema), createHubHandler);

export default hubRouter;
