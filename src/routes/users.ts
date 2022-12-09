import express from 'express';
import {
    getAlUsers,
    getOneUser,
    createUser,
    deleteUser,
    signIN,
} from '../controllers/users';

const router = express.Router();

router.get('/', getAlUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.post('/signin',signIN);

export default router;
