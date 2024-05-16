import { Router } from "express";
import { generateImage } from "../controllers/generate.controller.ts";
import wrapper from "../utils/wrapper.ts";
import { isAuthenticated } from "../middlewares/auth.ts";

const generateImageRoute = Router();

generateImageRoute.post("/image/generate", wrapper(generateImage));

export default generateImageRoute;
