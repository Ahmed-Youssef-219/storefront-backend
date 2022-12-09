import { Request, Response } from 'express';
import UserSchema from '../models/users';

const User = new UserSchema();

/* --------------------------------------------------------- get all users --------------------------------------------------- */
export const getAlUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.index();
        res.json(users);
    } catch (error) {
        throw new Error(`can not get the users ==> ${error}`);
    }
};

/* --------------------------------------------------------- get all users --------------------------------------------------- */
export const getOneUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as number;
        const user = await User.show(id);
        res.json({ user });
    } catch (error) {
        throw new Error(`can not get the user ==> ${error}`);
    }
};

/* --------------------------------------------------------- create user --------------------------------------------------- */
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const createdUser = await User.create(user);
        res.json({ createdUser });
    } catch (error) {
        throw new Error(`can not create the user ==> ${error}`);
    }
};

/* --------------------------------------------------------- delete user --------------------------------------------------- */
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as number;
        const deletedUser = await User.delete(id);
        res.json({ deletedUser });
    } catch (error) {
        throw new Error(`can not delete the user ==> ${error}`);
    }
};
