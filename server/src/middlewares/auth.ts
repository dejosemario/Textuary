import { NextFunction, Request, Response} from 'express';
import {verifyToken} from '../utils/index.ts';
import ErrorWithStatus from './ErrorWithStatus.ts';
import { JwtPayload } from 'jsonwebtoken';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
const authorizaton = req.headers.authorization;
if (!authorizaton ) throw new ErrorWithStatus('Unauthorized', 401);
const token = authorizaton.split(' ')[1];

try{
    const payload = verifyToken(token) as JwtPayload; // Assert the type of payload to JwtPayload
    (req as any).user = {};
    (req as any).user.id = payload.id;
    next();
}
catch (error){
    next(new ErrorWithStatus('Invalid token provided', 401));
}
};