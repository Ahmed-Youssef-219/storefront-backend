import express, { Request, Response } from 'express';
import { getAlUsers } from '../controllers/users';

const router = express.Router();

router.get('/', getAlUsers);

export default router;
