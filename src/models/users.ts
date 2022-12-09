/* -------------------> create user schema <-------------------- */
import { User } from '../types/types';
import dbServer from '../database';

export default class UserSchema {
    /* -------------------------------------------- get all users -------------------------------------------- */
    async index(): Promise<User[]> {
        try {
            const connection = await dbServer.connect();
            const sql = `SELECT * FROM "users"`;
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        } catch (error) {
            throw new Error(`can not get the users ==> ${error}`);
        }
    }

    /* -------------------------------------------- get one user -------------------------------------------- */
    async show(id: number): Promise<User> {
        try {
            const connection = await dbServer.connect();
            const sql = `SELECT * FROM users WHERE id=$1`;
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`can not get the user ==> ${error}`);
        }
    }

    /* -------------------------------------------- create user -------------------------------------------- */
    async create(user: User): Promise<User> {
        try {
            const connection = await dbServer.connect();
            const sql = `INSERT INTO users (firstname, lastname, password) VALUES ($1,$2,$3) RETURNING *`;
            const result = await connection.query(sql, [
                user.firstName ,
                user.lastName ,
                user.password ,
            ]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`can not create the user ==> ${error}`);
        }
    }

    /* -------------------------------------------- delete user -------------------------------------------- */
    async delete(id: number): Promise<User> {
        try {
            const connection = await dbServer.connect();
            const sql = `DELETE FROM users WHERE id=$1 RETURNING firstname,lastname`;
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`can not delete the user ==> ${error}`);
        }
    }
}
