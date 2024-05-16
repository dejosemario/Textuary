import User from "../models/user.model.ts";
import {
  hashPassword,
  comparePassword,
  generateToken,
} from "../utils/index.ts";
import ErrorWithStatus from "../middlewares/ErrorWithStatus.ts";

export interface UserData {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: object;
  token: string;
}

const createUser = async (data: UserData): Promise<object> => {
  const user = await User.findOne({ email: data.email });
  if (user) {
    throw new ErrorWithStatus("User already exists", 400);
  }
  const hashedPassword = await hashPassword(data.password);
  const newUser = new User({ ...data, password: hashedPassword });
  await newUser.save();
  return newUser;
};

const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ErrorWithStatus("User not found", 404);
  }
  const isMatch = await comparePassword(password, user.password as string);

  if (!isMatch) {
    throw new ErrorWithStatus("Invalid credentials", 401); 
  }

  //generate the access token
  const token = generateToken({
    id: user._id,
    email: user.email,
  });

  return { user: user.toJSON(), token };
};

export { createUser, login };
