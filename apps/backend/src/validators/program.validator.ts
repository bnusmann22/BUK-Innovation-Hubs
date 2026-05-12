import { z } from "zod";
import { ProgramType, ApplicationStatus } from "../generated/prisma/enums";

export const createProgramSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  type: z.nativeEnum(ProgramType, { message: "Invalid program type" }),
  eligibility: z.string().optional(),
  maxApplicants: z
    .number()
    .int("Max applicants must be a whole number")
    .positive("Max applicants must be a positive number")
    .optional(),
  deadline: z.coerce.date({ message: "Invalid deadline date" }),
  isActive: z.boolean().default(true),
  isPublished: z.boolean().default(false),
  hubId: z.string().uuid("Valid hub ID is required").optional(),
});

export const updateProgramSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").optional(),
  description: z.string().min(20, "Description must be at least 20 characters").optional(),
  type: z.nativeEnum(ProgramType, { message: "Invalid program type" }).optional(),
  eligibility: z.string().optional(),
  maxApplicants: z
    .number()
    .int("Max applicants must be a whole number")
    .positive("Max applicants must be a positive number")
    .optional(),
  deadline: z.coerce.date({ message: "Invalid deadline date" }).optional(),
  isActive: z.boolean().optional(),
  isPublished: z.boolean().optional(),
});

export const registerForProgramSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("A valid email address is required"),
  phone: z.string().min(7, "A valid phone number is required"),
  documents: z
    .array(z.string().url("Each document must be a valid URL"))
    .optional()
    .default([]),
});

export const reviewRegistrationSchema = z.object({
  status: z
    .nativeEnum(ApplicationStatus, { message: "Status must be APPROVED or REJECTED" })
    .refine((val) => val !== ApplicationStatus.PENDING, {
      message: "Status must be APPROVED or REJECTED",
    }),
  notes: z.string().optional(),
});

export type CreateProgramInput = z.infer<typeof createProgramSchema>;
export type UpdateProgramInput = z.infer<typeof updateProgramSchema>;
export type RegisterForProgramInput = z.infer<typeof registerForProgramSchema>;
export type ReviewRegistrationInput = z.infer<typeof reviewRegistrationSchema>;
