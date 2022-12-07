import express, { Request, Response } from 'express';
import { getAllOrders } from '../controllers/orders';

const router = express.Router();

router.get('/', getAllOrders);

export default router;
