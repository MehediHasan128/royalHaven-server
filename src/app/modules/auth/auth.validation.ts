import { z } from "zod"

const UserSignInValidationSchema = z.object({
    body: z.object({
        userEmail: z.string(),
        userPassword: z.string()
    })
});

export const AuthValidation = {
    UserSignInValidationSchema
}