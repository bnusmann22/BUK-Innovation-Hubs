import { Request, Response, NextFunction } from "express";
import { type AuthRequest } from "../middlewares/verifytoken";
import { AppError } from "../types/error";
import {
  createProgram,
  updateProgram,
  deleteProgram,
  getPublicPrograms,
  getPublicProgramById,
  registerForProgram,
  getRegistrations,
  reviewRegistration,
} from "../services/program.service";
import type {
  CreateProgramInput,
  UpdateProgramInput,
  RegisterForProgramInput,
  ReviewRegistrationInput,
} from "../validators/program.validator";

export const getPublicProgramsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { type, hubId, page, limit } = req.query as Record<string, string | undefined>;
    const result = await getPublicPrograms({
      type,
      hubId,
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
    });
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    return next(error);
  }
};

export const getPublicProgramByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };
    const program = await getPublicProgramById(id);
    return res.status(200).json({ status: "success", data: program });
  } catch (error) {
    return next(error);
  }
};

export const createProgramHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user;
    if (!user) throw new AppError("Authentication required", 401);

    const program = await createProgram(req.body as CreateProgramInput, user);
    return res.status(201).json({
      status: "success",
      message: "Program created successfully",
      data: program,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateProgramHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user;
    if (!user) throw new AppError("Authentication required", 401);

    const { id } = req.params as { id: string };
    const program = await updateProgram(id, req.body as UpdateProgramInput, user);
    return res.status(200).json({
      status: "success",
      message: "Program updated successfully",
      data: program,
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteProgramHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user;
    if (!user) throw new AppError("Authentication required", 401);

    const { id } = req.params as { id: string };
    await deleteProgram(id, user);
    return res.status(200).json({
      status: "success",
      message: "Program deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
};

export const registerForProgramHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };
    const registration = await registerForProgram(id, req.body as RegisterForProgramInput);
    return res.status(201).json({
      status: "success",
      message:
        "Your application has been submitted successfully. You will be notified of the outcome by email.",
      data: { id: registration.id, status: registration.status },
    });
  } catch (error) {
    return next(error);
  }
};

export const getRegistrationsHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user;
    if (!user) throw new AppError("Authentication required", 401);

    const { id } = req.params as { id: string };
    const { status, page, limit } = req.query as Record<string, string | undefined>;
    const result = await getRegistrations(id, user, {
      status,
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
    });
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    return next(error);
  }
};

export const reviewRegistrationHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user;
    if (!user) throw new AppError("Authentication required", 401);

    const { id, regId } = req.params as { id: string; regId: string };
    const registration = await reviewRegistration(
      id,
      regId,
      req.body as ReviewRegistrationInput,
      user,
    );
    return res.status(200).json({
      status: "success",
      message: `Application ${registration.status.toLowerCase()} successfully`,
      data: registration,
    });
  } catch (error) {
    return next(error);
  }
};
