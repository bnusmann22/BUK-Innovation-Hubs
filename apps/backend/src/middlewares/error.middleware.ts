// src/middlewares/error.middleware.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../types/error";
import { ZodError } from "zod";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { Prisma } from "../generated/prisma/client";
import env from "../config/env";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // zod validation errors
  if (err instanceof ZodError) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "Validation failed",
      errors: err.issues.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
  }

  // prisma errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // unique constraint violation
    if (err.code === "P2002") {
      const field = (err.meta?.target as string[])?.join(", ");
      return res.status(409).json({
        status: "error",
        code: 409,
        message: `${field} already exists`,
      });
    }

    // record not found
    if (err.code === "P2025") {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Record not found",
      });
    }

    // foreign key constraint failed
    if (err.code === "P2003") {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Related record not found",
      });
    }
  }

  // jwt errors
  if (err instanceof TokenExpiredError) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Session expired, please login again",
    });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Invalid token",
    });
  }

  // known operational errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      code: err.statusCode,
      message: err.message,
    });
  }

  // unknown errors
  console.error("UNHANDLED ERROR:", err);

  return res.status(500).json({
    status: "error",
    code: 500,
    message: env.NODE_ENV === "production" ? "Something went wrong" : err.message,
    ...(env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};
