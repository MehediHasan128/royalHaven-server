import express from 'express';
import { UserController } from './user.controller';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

// Create buyer
router.post('/create-user', UserController.createUser);
// Create seller
router.post('/create-seller', UserController.createSeller);
// Upload image
router.post('/uploadImage/:userId', upload.single('file'), UserController.uploadUserImage);
// Get all users
router.get('/', UserController.getallUser);

export const UserRoutes = router;
