import { Router } from "express";
import { verifyToken } from "../middlewares/verifytoken";
import { requireRoles } from "../middlewares/rbac.middleware";
import { Role } from "../generated/prisma/enums";
import { validate } from "../middlewares/validate.middleware";
import { createHubSchema, updateHubSchema, assignManagerSchema } from "../validators/hub.validator";
import {
  createHubHandler,
  getAllHubsHandler,
  getHubByIdHandler,
  updateHubHandler,
  deleteHubHandler,
  assignHubManagerHandler,
} from "../controllers/hub.controller";
import { requireHubScope } from "../middlewares/rbac.middleware";

const hubRouter = Router();

hubRouter.get("/", verifyToken, requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER), getAllHubsHandler);
hubRouter.get("/:id", verifyToken, requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER), getHubByIdHandler);
hubRouter.post("/", verifyToken, requireRoles(Role.SUPER_ADMIN), validate(createHubSchema), createHubHandler);
hubRouter.patch(
  "/:id",
  verifyToken,
  requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER),
  requireHubScope((req) => req.params.id as string),
  validate(updateHubSchema),
  updateHubHandler,
);
hubRouter.delete("/:id", verifyToken, requireRoles(Role.SUPER_ADMIN), deleteHubHandler);
hubRouter.patch(
  "/:id/manager",
  verifyToken,
  requireRoles(Role.SUPER_ADMIN),
  validate(assignManagerSchema),
  assignHubManagerHandler,
);

export default hubRouter;
