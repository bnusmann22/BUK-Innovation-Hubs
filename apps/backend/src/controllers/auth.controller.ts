import { Request, Response, NextFunction } from "express";
import { AppError } from "../types/error";
import { type AuthRequest } from "../middlewares/verifytoken";
import { getCurrentUser, loginUser, logoutUser, refreshUserToken } from "../services/auth.service";
import { type LogoutInput, type RefreshInput } from "../validators/auth.validator";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password, {
      ip: req.ip,
      userAgent: req.get("user-agent") || undefined,
    });

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

export const refresh = async (
  req: Request<unknown, unknown, RefreshInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { refreshToken } = req.body;
    const data = await refreshUserToken(refreshToken);

    return res.status(200).json({
      status: "success",
      message: "Token refreshed",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

export const logout = async (
  req: Request<unknown, unknown, LogoutInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { refreshToken } = req.body;
    await logoutUser(refreshToken);

    return res.status(200).json({
      status: "success",
      message: "Logged out successfully",
    });
  } catch (error) {
    return next(error);
  }
};

export const me = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      throw new AppError("Authentication required", 401);
    }

    const user = await getCurrentUser(userId);

    return res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};

export const rbacCheck = (req: AuthRequest, res: Response) => {
  return res.status(200).json({
    status: "success",
    message: "You are authorized for this protected role route.",
    data: {
      userId: req.user?.userId,
      role: req.user?.role,
      hubId: req.user?.hubId,
    },
  });
};

export const hubScopeCheck = (req: AuthRequest, res: Response) => {
  return res.status(200).json({
    status: "success",
    message: "You are authorized for this hub-scoped route.",
    data: {
      userId: req.user?.userId,
      role: req.user?.role,
      userHubId: req.user?.hubId,
      requestedHubId: typeof req.params.hubId === "string" ? req.params.hubId : null,
    },
  });
};
