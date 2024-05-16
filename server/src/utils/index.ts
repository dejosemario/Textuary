import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import ErrorWithStatus from "../middlewares/ErrorWithStatus";
import dotenv from "dotenv";

// dotenv.config();

// const secretKey = "your_secret_key";
let secretKey = process.env.JWT_SECRET ?? "secret_key";

// This function is used to validate the request body against a schema.
const validate = (schema: any, data: any): any => {
  if (schema) {
    const { value, error } = schema.validate(data);
    if (error) {
      const errorMessage = error.details[0].message;
      new ErrorWithStatus(errorMessage, 400);
    }
    return value;
  }
};

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

const generateToken = (payload: object) => {
  return jwt.sign(payload, secretKey, { expiresIn: "1d" });
};

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return new ErrorWithStatus("unauthorized", 401);
  }
};

export { validate, hashPassword, comparePassword, generateToken };
