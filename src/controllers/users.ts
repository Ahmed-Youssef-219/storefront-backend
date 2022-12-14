import { Request, Response } from 'express';
import UserSchema from '../models/users';
import jwt from 'jsonwebtoken';
import Vars from '../config';
const User = new UserSchema();

/* --------------------------------------------------------- get all users --------------------------------------------------- */
export const getAlUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.index();
        res.status(200).json({ users });
    } catch (error) {
        throw new Error(`can not get the users ==> ${error}`);
    }
};

/* --------------------------------------------------------- get one user --------------------------------------------------- */
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
        const token = jwt.sign(
            { user: createUser },
            Vars.TOKEN_SECRET as string
        );
        return res.json({ createdUser, token });
    } catch (error) {
        throw new Error(`can not create the user ==> ${error}`);
    }
};
/* --------------------------------------------------------- signIN --------------------------------------------------- */
export const signIN = async (req: Request, res: Response) => {
    try {
        const firstname = req.body.firstname as string;
        const lastname = req.body.lastname as string;
        const password = req.body.password as string;
        const checkeduser = await User.signIn(firstname, lastname, password);
        if (!checkeduser) {
            return res.json({
                message: 'You are a hacker please leave me alone :(',
            });
        }
        const token = jwt.sign(
            { checkeduser },
            Vars.TOKEN_SECRET as unknown as string
        );
        return res.json({ ...checkeduser, token });
    } catch (error) {
        throw new Error(`not valid ==> ${error}`);
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
