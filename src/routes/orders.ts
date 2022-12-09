import express from 'express';
import { addProducts, createOrder, deleteOrder, getAllOrders, showProducts } from '../controllers/orders';

const router = express.Router();

router.get('/', getAllOrders);
router.post('/', createOrder);
router.delete('/:id', deleteOrder);
router.post('/:orderId/products', addProducts)
router.get('/:orderId/products', showProducts)
export default router;


