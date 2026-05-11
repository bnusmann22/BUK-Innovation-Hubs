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

export const requireHubScope =
  (hubIdResolver: (req: AuthRequest) => string | undefined | null) =>
  (req: AuthRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(new AppError("Authentication required", 401));
    }

    if (req.user.role === "SUPER_ADMIN") {
      return next();
    }

    if (!req.user.hubId) {
      return next(new AppError("Forbidden: no hub scope assigned", 403));
    }

    const requestedHubId = hubIdResolver(req);
    if (!requestedHubId) {
      return next(new AppError("hubId is required for scoped access", 400));
    }

    if (requestedHubId !== req.user.hubId) {
      return next(new AppError("Forbidden: cannot access resources outside your hub", 403));
    }

    next();
  };

export const requireHubScopeParam = (paramName = "hubId") =>
  requireHubScope((req) => {
    const hubId = req.params[paramName];
    return typeof hubId === "string" ? hubId : undefined;
  });
