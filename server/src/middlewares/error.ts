import { Request, Response, NextFunction } from "express";
import ErrorWithStatus from "./ErrorWithStatus";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ErrorWithStatus) {
    res.status(err.code).json({ success: err.success, message: err.message });
  } else {
    res.status(500).json({ success: err.success, message: err.message });
  }
};

export { errorHandler };
