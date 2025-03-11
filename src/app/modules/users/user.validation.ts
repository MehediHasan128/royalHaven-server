import { z } from 'zod';

export const UserNameValidationSchema = z.object({
  firstName: z.string().min(1, 'First name is required').trim(),
  lastName: z.string().min(1, 'Last name is required').trim(),
});

const CreateUserValidationSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});


export const UserValidation = {
    CreateUserValidationSchema
}
