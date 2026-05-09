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
