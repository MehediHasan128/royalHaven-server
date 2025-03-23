import express from 'express';
import { SellerReqController } from './sellerRequest.controller';

const router = express.Router();

router.post('/sellerReq', SellerReqController.createSeller);
router.get('/', SellerReqController.getAllSellerReq);

export const SellerReqRoutes = router;
