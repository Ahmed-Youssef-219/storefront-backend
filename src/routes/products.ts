import express, { Request, Response } from 'express';
import { getAllProducts } from '../controllers/products';

const router = express.Router();

router.get('/', getAllProducts);

export default router;
