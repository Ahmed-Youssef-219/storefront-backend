import { Request, Response } from 'express';

export const getAlUsers = (req: Request, res: Response) => {
    res.send('hello from get all users');
};
