import generateImageService from "../services/generate.service.ts";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export const generateImage = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { prompt } = req.body;
  try {
    const ImageData = await generateImageService(prompt, {
      apiKey: process.env.api_key,
      apiEndpoint: process.env.api_endpoint,
    });
    res.json(ImageData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
