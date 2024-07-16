import {z} from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, "Content should not be less than 10 characters")
    .max(200, "Content should not be more than 200 characters"),
});

