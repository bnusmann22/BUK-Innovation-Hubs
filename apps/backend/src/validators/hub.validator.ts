import { z } from "zod";

const adminSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  personalEmail: z.string().email("Valid personal email is required"),
  imageUrl: z.string().optional(),
  socialLinks: z
    .object({
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      instagram: z.string().optional(),
      facebook: z.string().optional(),
    })
    .optional(),
});

const staffSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  personalEmail: z.string().email("Valid personal email is required"),
});

export const createHubSchema = z.object({
  name: z.string().min(2, "Hub name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string().optional(),
  focusArea: z.string().min(2, "Focus area is required"),
  contactEmail: z.string().email("Valid contact email is required").optional().or(z.literal("")),
  contactPhone: z.string().optional(),
  socialLinks: z
    .object({
      website: z.string().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      instagram: z.string().optional(),
      facebook: z.string().optional(),
      youtube: z.string().optional(),
    })
    .optional(),
  facilities: z.array(z.string()).optional().default([]),
  logo: z.string().optional(),
  gallery: z.array(z.string()).optional().default([]),
  pricing: z
    .object({
      free: z.boolean().default(true),
      amount: z.number().optional(),
      currency: z.string().optional().default("NGN"),
      description: z.string().optional(),
    })
    .optional(),
  manager: adminSchema,
  contentManager: staffSchema.optional(),
  programsOfficer: staffSchema.optional(),
});

export type CreateHubInput = z.infer<typeof createHubSchema>;

export const updateHubSchema = z.object({
  name: z.string().min(2, "Hub name must be at least 2 characters").optional(),
  description: z.string().min(10, "Description must be at least 10 characters").optional(),
  location: z.string().optional(),
  focusArea: z.string().min(2, "Focus area is required").optional(),
  contactEmail: z.string().email("Valid contact email is required").optional().or(z.literal("")),
  contactPhone: z.string().optional(),
  socialLinks: z
    .object({
      website: z.string().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      instagram: z.string().optional(),
      facebook: z.string().optional(),
      youtube: z.string().optional(),
    })
    .optional(),
  facilities: z.array(z.string()).optional(),
  logo: z.string().optional(),
  gallery: z.array(z.string()).optional(),
  pricing: z
    .object({
      free: z.boolean(),
      amount: z.number().optional(),
      currency: z.string().optional().default("NGN"),
      description: z.string().optional(),
    })
    .optional(),
  isActive: z.boolean().optional(),
});

export const assignManagerSchema = z.object({
  userId: z.string().uuid("Valid user ID is required"),
});

export type UpdateHubInput = z.infer<typeof updateHubSchema>;
export type AssignManagerInput = z.infer<typeof assignManagerSchema>;
