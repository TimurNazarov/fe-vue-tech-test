import { z } from "zod";

export const contactFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),

  firstname: z
    .string({ required_error: "First name is required" })
    .nonempty({ message: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters" }),

  lastname: z
    .string({ required_error: "Last name is required" })
    .nonempty({ message: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters" }),

  details: z
    .string({ required_error: "Details are required" })
    .nonempty({ message: "Details are required" })
    .min(50, { message: "Details must be at least 50 characters" })
    .max(500, { message: "Details can be maximum 500 characters" }),
});
