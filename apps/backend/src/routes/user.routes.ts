import { Router } from "express";
import {
  createUser,
  deactivateUser,
  getUserById,
  listUsers,
  resetUserPassword,
  updateUser,
} from "../controllers/user.controller";
import { requireRoles } from "../middlewares/rbac.middleware";
import { validate } from "../middlewares/validate.middleware";
import { verifyToken } from "../middlewares/verifytoken";
import { Role } from "../generated/prisma/enums";
import { createUserSchema, resetPasswordSchema, updateUserSchema } from "../validators/user.validator";

const userRouter = Router();

userRouter.use(verifyToken, requireRoles(Role.SUPER_ADMIN));

userRouter.post("/", validate(createUserSchema), createUser);
userRouter.get("/", listUsers);
userRouter.get("/:id", getUserById);
userRouter.patch("/:id", validate(updateUserSchema), updateUser);
userRouter.patch("/:id/deactivate", deactivateUser);
userRouter.patch("/:id/reset-password", validate(resetPasswordSchema), resetUserPassword);

export default userRouter;
