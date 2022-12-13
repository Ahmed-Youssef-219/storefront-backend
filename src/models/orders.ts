import { Order, Order_products } from '../types/types';
import dbServer from '../database';

export default class OrderSchema {
    /* -------------------------------------------- get current orders by users -------------------------------------------- */
    async index(userId: number): Promise<Order[]> {
        try {
            const connection = await dbServer.connect();
            const sql = `SELECT * FROM orders WHERE user_id=$1`;
            const result = await connection.query(sql, [userId]);
            connection.release();
            return result.rows;
        } catch (error) {
            throw new Error(`can not get the order (from models) ==> ${error}`);
        }
    }

    /* -------------------------------------------- create an order -------------------------------------------- */
    async create(order: Order): Promise<Order> {
        try {
            const connection = await dbServer.connect();
            const sql = `INSERT INTO orders (status, user_id) VALUES ($1,$2) RETURNING *`;
            const result = await connection.query(sql, [
                order.status,
                order.user_id,
            ]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(
                `can not create the ordre (from models) ==> ${error}`
            );
        }
    }
    
    /* -------------------------------------------- delete an order -------------------------------------------- */
    async delete(id: number): Promise<Order> {
        try {
            const connection = await dbServer.connect();
            const sql = `DELETE FROM products WHERE id=$1 RETURNING status,user_id)`;
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(
                `can not delete the order (from models) ==> ${error}`
            );
        }
    }

    /* -------------------------------------------- add products to order -------------------------------------------- */
    async addProducts(
        quantity: number,
        orderId: number,
        productId: number
    ): Promise<Order_products> {
        try {
            const connection = await dbServer.connect();
            const sql = `INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1,$2,$3) RETURNING *`;
            const result = await connection.query(sql, [
                quantity,
                orderId,
                productId,
            ]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(
                `can not add products to the order (from models) ==> ${error}`
            );
        }
    }
    /* ----------------------------------------------- show products in the order ----------------------------------- */
    async showProducts(orderId: number): Promise<Order_products[]> {
        try {
            const connection = await dbServer.connect();
            const sql = `SELECT * FROM order_products WHERE order_id=$1`;
            const result = await connection.query(sql, [orderId]);
            connection.release();
            return result.rows;
        } catch (error) {
            throw new Error(
                `can not show products of specific order (from models) ==> ${error}`
            );
        }
    }
}
