import express from 'express';
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getOneProduct,
} from '../controllers/products';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.post('/', authMiddleware, createProduct);
router.delete('/:id', authMiddleware, deleteProduct);

export default router;
