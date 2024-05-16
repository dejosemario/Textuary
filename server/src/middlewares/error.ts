import { Request, Response, NextFunction } from "express";
import ErrorWithStatus from "./ErrorWithStatus";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ErrorWithStatus) {
    return res.status(err.code).json({ success: false, message: err.message });
  } else {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export { errorHandler };
