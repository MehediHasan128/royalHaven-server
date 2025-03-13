import { z } from 'zod';

const CreateUserValidationSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});


export const UserValidation = {
    CreateUserValidationSchema
}
