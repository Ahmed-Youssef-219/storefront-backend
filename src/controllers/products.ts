import { Request, Response } from 'express';

export const getAllProducts = (req: Request, res: Response) => {
    res.send('hello from get all products');
};
