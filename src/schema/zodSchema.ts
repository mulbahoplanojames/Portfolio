import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(5, { message: "Name must be at least 5 characters" }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});
