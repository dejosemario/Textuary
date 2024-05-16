import * as chatService from "../services/chat.service.ts";
import { Request, Response } from "express";

export const chat = async (req: Request, res: Response): Promise<any> => {
  try {
    const { prompt, chatId } = req.body;
    const userId = (req as any).user.id;

    const chat = await chatService.handleChatProcess(userId, chatId, prompt);
    res.status(200).json({ success: true, message: "Chat successful", chat });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getChatHistory = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const chatId: any = req.params.id;
    const userId = (req as any).user.id;

    const chat = await chatService.getChatHistory(userId, chatId);
    res
      .status(200)
      .json({ success: true, message: "Chat retrieval successful", chat });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllChatHistory = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userId = (req as any).user.id;
    const chat = await chatService.getChatHistory(userId);
    res
      .status(200)
      .json({ success: true, message: "Chat retrieval successful", chat });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteChat = async (req: Request, res: Response): Promise<any> => {
  const chatId: any = req.params.id;
  const userId = (req as any).user.id;

  try {
    const chat = await chatService.getChatHistory(userId, chatId);
    if (chat) {
      return res.status(204).json({});
    }
    return res.status(200).json({
      success: false,
      message: "Chat can not be deleted or does not exists",
      chat,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
