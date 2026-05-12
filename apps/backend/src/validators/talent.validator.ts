import { z } from "zod";

export const submitTalentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  department: z.string().min(2, "Department is required"),
  regNumber: z.string().min(2, "Registration number is required"),
  whatsappNumber: z.string().min(7, "WhatsApp number is required"),
  email: z.string().email("Enter a valid email address"),
  skillset: z.string().min(2, "Skillset is required"),
});

export type SubmitTalentInput = z.infer<typeof submitTalentSchema>;

// under development, not yet implemented in the controller