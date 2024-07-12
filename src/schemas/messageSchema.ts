import {z} from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message : 'Content must have atleast 10 characters'})
    .max(300, {message : 'Content must have atmost 300 characters'})
})

