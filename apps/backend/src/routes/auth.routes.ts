import { Router } from "express";
import { verifyToken } from "../middlewares/verifytoken";
import { requireHubScope, requireRoles } from "../middlewares/rbac.middleware";
import { Role } from "../generated/prisma/enums";
import { login, logout, me, rbacCheck, refresh } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import { loginSchema, logoutSchema, refreshSchema } from "../validators/auth.validator";

const authRouter = Router();

authRouter.post("/login", validate(loginSchema), login);
authRouter.post("/refresh", validate(refreshSchema), refresh);
authRouter.post("/logout", validate(logoutSchema), logout);
authRouter.get("/me", verifyToken, me);
authRouter.get("/rbac-check", verifyToken, requireRoles(Role.SUPER_ADMIN, Role.HUB_MANAGER), rbacCheck);
authRouter.get(
  "/hub-scope-check/:hubId",
  verifyToken,
  requireHubScope((req) => {
    const hubId = req.params.hubId;
    return typeof hubId === "string" ? hubId : undefined;
  }),
  rbacCheck,
);

export default authRouter;
