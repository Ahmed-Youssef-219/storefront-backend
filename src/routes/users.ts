import express from 'express';
import {
    getAlUsers,
    getOneUser,
    createUser,
    deleteUser,
} from '../controllers/users';

const router = express.Router();

router.get('/', getAlUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
