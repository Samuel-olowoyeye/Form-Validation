import { z } from "zod";
 
export const signinSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, {
      message: "username must be atleast 3 characters",
    })
    .max(8,{
      message: "username must cannot exceed 8 characters"
    }),

    email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email address.",
    }),

    password: z
    .string()
    .refine(
      (val) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          val
        ),
      {
        message:
          "Password must be at least 8 characters long and contain at least one uppercase character, one lowercase character, and one special symbol",
      }
    ),
  confirmPassword: z.string({
    required_error: "Confirm Password is required",
  }),
  // ...
})
.superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["confirmPassword"],
      message: "Passwords does not match",
    });
  }
});


