import generateImageService, {
  translate,
} from '../services/generate.service.ts';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const apiKey = process.env.API_KEY;
const apiEndpoint = process.env.API_ENDPOINT;

export const generateImage = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { prompt } = req.body;
  console.log('Prompt', prompt);
  try {
    const ImageData = await generateImageService(prompt, {
      apiKey,
      apiEndpoint,
    });
    res.json(ImageData);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const translateText = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { text } = req.body;
    if (!text)
      return res
        .status(400)
        .json({ success: false, message: 'Text cannot be empty' });
    const translatedText = await translate(text);
    res.json({
      message: 'Text translated',
      data: { originalText: text, translatedText },
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
