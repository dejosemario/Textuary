import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    const status: number = err.status || 500;
    const success: boolean = err.success || false;
    const message: string = err.message || "Something went wrong";

    const cleanedMessage: string = message.replace(/"/g, "");
    res.status(status).json({ success, message: cleanedMessage });
};

export { errorHandler };
