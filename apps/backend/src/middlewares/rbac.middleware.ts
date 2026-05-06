import { NextFunction, Response } from "express";
import { type Role } from "../generated/prisma/enums";
import { type AuthRequest } from "./verifytoken";
import { AppError } from "../types/error";

export const requireRoles =
  (...allowedRoles: Role[]) =>
  (req: AuthRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(new AppError("Authentication required", 401));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(new AppError("Forbidden: insufficient permissions", 403));
    }

    next();
  };
