import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

// Create buyer
router.post('/create-user', UserController.createUser);
// Create seller
router.post('/create-seller', UserController.createSeller);

export const UserRoutes = router;
