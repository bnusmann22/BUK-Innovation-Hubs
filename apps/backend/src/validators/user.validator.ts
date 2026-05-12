import { z } from "zod";
import { Role } from "../generated/prisma/enums";

const roleValues = Object.values(Role);

export const createUserSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Valid email is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    role: z.enum(roleValues as [string, ...string[]]),
    hubId: z.string().uuid("hubId must be a valid UUID").optional().nullable(),
  })
  .strict();

export const updateUserSchema = z
  .object({
    name: z.string().min(2).optional(),
    role: z.enum(roleValues as [string, ...string[]]).optional(),
    hubId: z.string().uuid("hubId must be a valid UUID").optional().nullable(),
    isActive: z.boolean().optional(),
  })
  .strict()
  .refine((data) => Object.keys(data).length > 0, {
    message: "Provide at least one field to update",
  });

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  .strict();

export const listUsersQuerySchema = z.object({
  role: z.enum(roleValues as [string, ...string[]]).optional(),
  hubId: z.string().uuid().optional(),
  isActive: z
    .string()
    .optional()
    .transform((value) => {
      if (value === undefined) return undefined;
      return value === "true";
    }),
  page: z
    .string()
    .optional()
    .transform((value) => (value ? Number(value) : 1)),
  limit: z
    .string()
    .optional()
    .transform((value) => (value ? Number(value) : 20)),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type ListUsersQueryInput = z.infer<typeof listUsersQuerySchema>;
