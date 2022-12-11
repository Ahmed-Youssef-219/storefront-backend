import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const bearer_token = req.headers.authorization;
    const token = bearer_token?.split(' ')[1];
    const decodedData = jwt.verify(token as string, TOKEN_SECRET as string);
    if (decodedData) {
        next();
    } else {
        throw new Error('you are a hacker please leave me alone :( ');
    }
};

export default authMiddleware;
