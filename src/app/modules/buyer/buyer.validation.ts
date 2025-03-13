import { z } from 'zod';
import { UserNameValidationSchema } from '../../global/zodValidation';

const createBuyerValidationSchema = z.object({
  body: z.object({
    buyer: z.object({
      userName: UserNameValidationSchema,
      email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email format')
        .trim()
        .toLowerCase(),
    }),
  }),
});


export const BuyerValidation = {
    createBuyerValidationSchema
}
