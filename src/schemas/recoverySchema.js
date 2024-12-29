import { z } from "zod";


export const recoverySchema = z.object({

    email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email address.",
    }),
});


