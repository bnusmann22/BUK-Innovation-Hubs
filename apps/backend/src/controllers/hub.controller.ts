import { Response, NextFunction } from "express";
import { type AuthRequest } from "../middlewares/verifytoken";
import { AppError } from "../types/error";
import { createHub, getAllHubs, getHubById, updateHub, deleteHub, assignHubManager } from "../services/hub.service";
import type { CreateHubInput, UpdateHubInput, AssignManagerInput } from "../validators/hub.validator";

export const createHubHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.userId;
    if (!userId) throw new AppError("Authentication required", 401);

    const hub = await createHub(req.body as CreateHubInput, userId);

    return res.status(201).json({
      status: "success",
      message: "Hub created successfully. Admin credentials have been sent by email.",
      data: hub,
    });
  } catch (error) {
    return next(error);
  }
};

export const getAllHubsHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const hubs = await getAllHubs();
    return res.status(200).json({ status: "success", data: hubs });
  } catch (error) {
    return next(error);
  }
};

export const getHubByIdHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };
    const hub = await getHubById(id);
    return res.status(200).json({ status: "success", data: hub });
  } catch (error) {
    return next(error);
  }
};

export const updateHubHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.userId;
    if (!userId) throw new AppError("Authentication required", 401);

    const { id } = req.params as { id: string };
    const hub = await updateHub(id, req.body as UpdateHubInput, userId);

    return res.status(200).json({
      status: "success",
      message: "Hub updated successfully",
      data: hub,
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteHubHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.userId;
    if (!userId) throw new AppError("Authentication required", 401);

    const { id } = req.params as { id: string };
    await deleteHub(id, userId);

    return res.status(200).json({
      status: "success",
      message: "Hub deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
};

export const assignHubManagerHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.userId;
    if (!userId) throw new AppError("Authentication required", 401);

    const { id } = req.params as { id: string };
    const hub = await assignHubManager(id, (req.body as AssignManagerInput).userId, userId);

    return res.status(200).json({
      status: "success",
      message: "Hub manager assigned successfully",
      data: hub,
    });
  } catch (error) {
    return next(error);
  }
};
