import express from 'express';
import { SellerController } from './seller.controller';

const router = express.Router();

// Get seller info
router.get("/:sellerId", SellerController.getSellerInfo);

export const SellerRoutes = router;