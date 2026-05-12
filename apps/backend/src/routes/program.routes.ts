import { Router } from "express";
import {
  createProgramHandler,
  deleteProgramHandler,
  getPublicProgramByIdHandler,
  getPublicProgramsHandler,
  getRegistrationsHandler,
  registerForProgramHandler,
  reviewRegistrationHandler,
  updateProgramHandler,
} from "../controllers/program.controller";
import { verifyToken } from "../middlewares/verifytoken";
import { requireRoles } from "../middlewares/rbac.middleware";
import { Role } from "../generated/prisma/enums";
import { validate } from "../middlewares/validate.middleware";
import {
  createProgramSchema,
  registerForProgramSchema,
  reviewRegistrationSchema,
  updateProgramSchema,
} from "../validators/program.validator";

const programRouter = Router();

programRouter.get("/", getPublicProgramsHandler);
programRouter.get("/:id", getPublicProgramByIdHandler);
programRouter.post("/:id/register", validate(registerForProgramSchema), registerForProgramHandler);

programRouter.post(
  "/",
  verifyToken,
  requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER, Role.PROGRAM_OFFICER),
  validate(createProgramSchema),
  createProgramHandler,
);
programRouter.patch(
  "/:id",
  verifyToken,
  requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER, Role.PROGRAM_OFFICER),
  validate(updateProgramSchema),
  updateProgramHandler,
);
programRouter.delete(
  "/:id",
  verifyToken,
  requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER),
  deleteProgramHandler,
);
programRouter.get(
  "/:id/registrations",
  verifyToken,
  requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER, Role.PROGRAM_OFFICER),
  getRegistrationsHandler,
);
programRouter.patch(
  "/:id/registrations/:regId",
  verifyToken,
  requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER, Role.PROGRAM_OFFICER),
  validate(reviewRegistrationSchema),
  reviewRegistrationHandler,
);

export default programRouter;
