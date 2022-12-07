import { Request, Response } from 'express';

export const getAllOrders = (req: Request, res: Response) => {
    res.send('hello from get all orders');
};
