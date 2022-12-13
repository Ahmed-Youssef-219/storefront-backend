import { Request, Response } from 'express';
import OrderSchema from '../models/orders';
import { Order } from '../types/types';

const OrderSc = new OrderSchema();
/* --------------------------------------------------------- get current orders by user --------------------------------------- */
export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId as unknown as number;
        const orders = await OrderSc.index(userId);
        res.json(orders);
    } catch (error) {
        throw new Error(
            `can not get the orders (from the controllers) ==> ${error}`
        );
    }
};

/* --------------------------------------------------------- create an order --------------------------------------------------- */
export const createOrder = async (req: Request, res: Response) => {
    try {
        const orderObj:Order = req.body;
        const createdOrder = await OrderSc.create(orderObj);
        res.json({ createdOrder });
    } catch (error) {
        throw new Error(
            `can not create the order (from the controllers) ==> ${error}`
        );
    }
};

/* --------------------------------------------------------- delete an order --------------------------------------------------- */
export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as number;
        const deletedOrder = await OrderSc.delete(id);
        res.json({ deletedOrder });
    } catch (error) {
        throw new Error(
            `can not delete the order (from the controllers) ==> ${error}`
        );
    }
};
/* --------------------------------------------------------- add products to order ---------------------------------------------- */

export const addProducts = async (req: Request, res: Response) => {
    try {
        const quantity = req.body.quantity;
        const productId = req.body.productId as unknown as number;
        const orderId = req.params.orderId as unknown as number;
        const order_products = await OrderSc.addProducts(
            quantity,
            orderId,
            productId
        );
        res.json(order_products);
    } catch (error) {
        throw new Error(
            `can not add products to the order (from controllers) ==> ${error}`
        );
    }
};

/* --------------------------------------------------------- show products in the order ------------------------------------------ */
export const showProducts = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.orderId as unknown as number;
        const prodsOfOrder = await OrderSc.showProducts(orderId);
        res.json(prodsOfOrder);
    } catch (error) {
        throw new Error(
            `can not show products of specific orde (from controllers) ==> ${error}`
        );
    }
};
