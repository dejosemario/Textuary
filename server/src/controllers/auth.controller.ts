import * as authService from "../services/auth.service";
import { Request, Response } from "express";
import { loginSchema, signupSchema } from "../middlewares/validators.schema.ts";
import { validate } from "../utils";

const signUp = async (req: Request, res: Response): Promise<any> => {
  validate(signupSchema, req.body);
  const user = await authService.createUser(req.body);
  if (user) {
    res
      .status(201)
      .json({ success: true, message: "User created successfully", data: user });
  }
};

const login = async (req: Request, res: Response): Promise<any> => {
  validate(loginSchema, req.body);
  const { email, password } = req.body;
  const userData = await authService.login(email, password);
  if (userData) {
    res
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        data: userData,
      });
  }
};

export { signUp, login };
