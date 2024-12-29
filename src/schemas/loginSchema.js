
import { z } from "zod";


export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email address.",
    }),

    password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Please enter a valid Password. ",
    }),

});