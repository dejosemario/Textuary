import generateImageService from "../services/generate.service.ts";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export const generateImage = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { prompt } = req.body;
  const apiKey = "apiKeyfdd86bf99fmsh640eba2f15f49d5p10bbcajsna2614ca5d8a0"
  const apiEndpoint = "https://dalle-image-generator.p.rapidapi.com/api/v1/generate"
  try {
    const ImageData = await generateImageService(prompt, {
      apiKey,
      apiEndpoint
    });
    res.json(ImageData);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
