import {z} from 'zod'

export const usernameValidation = z
.string()
.min(5, "Username should be atleast of 5 characters")
.max(20, "Username should not exceed 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Please enter a vlaid email address"}),
    password: z
    .string()
    .min(10, {message: "Password should be atleast of 10 characters"})
    .max(20,{message: "Password should not exceed a maximum 15 characters"})
})

