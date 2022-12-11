/* -------------------> create user schema <-------------------- */
import { User } from '../types/types';
import dbServer from '../database';
import bcrypt from 'bcrypt';
import { PEPPER, SALT } from '../config';

export default class UserSchema {
    /* -------------------------------------------- get all users -------------------------------------------- */
    async index(): Promise<User[]> {
        try {
            const connection = await dbServer.connect();
            const sql = `SELECT * FROM users`;
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
            const hashedPassword = bcrypt.hashSync(
                user.password + PEPPER,
                parseInt(SALT as string)
            );
            const result = await connection.query(sql, [
                user.firstName,
                user.lastName,
                hashedPassword,
            ]);
            connection.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`can not create the user ==> ${error}`);
        }
    }

    /* -------------------------------------------- signIN -------------------------------------------- */
    async signIn(
        firstName: string,
        lastName: string,
        password: string
    ): Promise<User | null> {
        try {
            const connection = await dbServer.connect();
            const sql = `SELECT password FROM users WHERE firstname=$1 AND lastname=$2`;
            const result = await connection.query(sql, [firstName, lastName]);

            if (result.rows.length) {
                const hashedPassword = result.rows[0].password;
                const isPasswordValidate = bcrypt.compareSync(
                    password + PEPPER,
                    hashedPassword
                );
                if (isPasswordValidate) {
                    const sql2 = `SELECT * FROM users WHERE firstname=$1 AND lastname=$2`;
                    const result2 = await connection.query(sql2, [
                        firstName,
                        lastName,
                    ]);
                    return result2.rows[0];
                }
            }
            connection.release();
            return null;
        } catch (error) {
            throw new Error(`not valid ==> ${error}`);
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
