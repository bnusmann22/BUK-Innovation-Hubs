import { Request, Response, NextFunction } from "express";
import {
  createAdminUser,
  deactivateAdminUser,
  getAdminUserById,
  listAdminUsers,
  resetAdminUserPassword,
  updateAdminUser,
} from "../services/user.service";
import {
  listUsersQuerySchema,
  type CreateUserInput,
  type ResetPasswordInput,
  type UpdateUserInput,
} from "../validators/user.validator";

export const createUser = async (
  req: Request<unknown, unknown, CreateUserInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await createAdminUser(req.body);
    return res.status(201).json({ status: "success", data: user });
  } catch (error) {
    return next(error);
  }
};

export const listUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = listUsersQuerySchema.parse(req.query);
    const result = await listAdminUsers(query);
    return res.status(200).json({ status: "success", data: result.items, meta: result.meta });
  } catch (error) {
    return next(error);
  }
};

export const getUserById = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const user = await getAdminUserById(req.params.id);
    return res.status(200).json({ status: "success", data: user });
  } catch (error) {
    return next(error);
  }
};

export const updateUser = async (
  req: Request<{ id: string }, unknown, UpdateUserInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await updateAdminUser(req.params.id, req.body);
    return res.status(200).json({ status: "success", data: user });
  } catch (error) {
    return next(error);
  }
};

export const deactivateUser = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const user = await deactivateAdminUser(req.params.id);
    return res.status(200).json({ status: "success", data: user });
  } catch (error) {
    return next(error);
  }
};

export const resetUserPassword = async (
  req: Request<{ id: string }, unknown, ResetPasswordInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await resetAdminUserPassword(req.params.id, req.body);
    return res.status(200).json({ status: "success", message: "Password reset successful" });
  } catch (error) {
    return next(error);
  }
};
