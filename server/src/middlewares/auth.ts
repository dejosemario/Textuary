import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/index.ts";
import { JwtPayload } from "jsonwebtoken";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const authorizaton = req.headers.authorization;
  if (!authorizaton)
    return res.status(401).json({ error: { message: "Unauthorized" } });
  const token = authorizaton.split(" ")[1];

  try {
    const payload = verifyToken(token) as JwtPayload; // Assert the type of payload to JwtPayload
    (req as any).user = {};
    (req as any).user.id = payload.id;
    next();
  } catch (error: any) {
    const message: string = error.message || "Invalid token";
    return res
      .status(401)
      .json({ error: { message: error.message || "Invalid token provided" } });
    // next(new ErrorWithStatus("Invalid token provided", 401));
  }
};
