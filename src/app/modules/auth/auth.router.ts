import express from 'express';
import { AuthController } from './auth.controller';
import { validationReq } from '../../middlwares/validationRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

// SignIn User
router.post(
  '/signIn',
//   validationReq(AuthValidation.UserSignInValidationSchema),
  AuthController.UserSignIn,
);

export const AuthRoutes = router;
