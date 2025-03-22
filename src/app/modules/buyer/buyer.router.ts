import express from 'express';
import { BuyerController } from './buyer.controller';

const router = express.Router();

// Add buyer other information
router.patch("/addBuyerInfo/:buyerId", BuyerController.addBuyerInformation);
// Get buyer information
router.get("/:uid", BuyerController.getBuyerInformation);

export const BuyerRoutes = router;
