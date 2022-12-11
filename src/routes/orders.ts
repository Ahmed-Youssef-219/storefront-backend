import express from 'express';
import {
    addProducts,
    createOrder,
    deleteOrder,
    getAllOrders,
    showProducts,
} from '../controllers/orders';
import authMiddleware from '../middleware/authMiddleware';
const router = express.Router();

router.get('/', authMiddleware, getAllOrders); //get current orders by users
router.post('/', authMiddleware, createOrder);
router.delete('/:id', authMiddleware, deleteOrder);
router.post('/:orderId/products', authMiddleware, addProducts);
router.get('/:orderId/products', authMiddleware, showProducts);
export default router;
