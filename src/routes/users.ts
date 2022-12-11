import express from 'express';
import {
    getAlUsers,
    getOneUser,
    createUser,
    deleteUser,
    signIN,
} from '../controllers/users';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, getAlUsers);
router.get('/:id', authMiddleware, getOneUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.post('/signin', signIN);

export default router;
