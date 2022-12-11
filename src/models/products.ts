import { Product } from '../types/types';
import dbServer from '../database';

export default class ProductSchema {
    /* -------------------------------------------- get all products -------------------------------------------- */
    async index(): Promise<Product[]> {
        try {
            const connection = await dbServer.connect();
            const sql = `SELECT * FROM products`;
            const result = await connection.query(sql);
            connection.release();
            console.log(result);
            return result.rows;
        } catch (error) {
            throw new Error(`can not get the products ==> ${error}`);
        }
    }

    /* -------------------------------------------- get one product -------------------------------------------- */
    async show(id: number): Promise<Product> {
        try {
            const connection = await dbServer.connect();
            const sql = `SELECT * FROM products WHERE id=$1`;
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`can not get the product ==> ${error}`);
        }
    }

    /* -------------------------------------------- create a product -------------------------------------------- */
    async create(product: Product): Promise<Product> {
        try {
            const connection = await dbServer.connect();
            const sql = `INSERT INTO products (name, price) VALUES ($1,$2) RETURNING *`;
            const result = await connection.query(sql, [
                product.name,
                product.price,
            ]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`can not create the product ==> ${error}`);
        }
    }

    /* -------------------------------------------- delete a product -------------------------------------------- */
    async delete(id: number): Promise<Product> {
        try {
            const connection = await dbServer.connect();
            const sql = `DELETE FROM products WHERE id=$1 RETURNING name,price`;
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`can not delete the product ==> ${error}`);
        }
    }
}
