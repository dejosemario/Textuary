import { Router } from "express";
import * as chatController from "../controllers/chat.controller.ts";
import wrapper from "../utils/wrapper.ts";
import { isAuthenticated } from "../middlewares/auth.ts";

const chatRoute = Router();

chatRoute.post("/chat", isAuthenticated, wrapper(chatController.chat));
chatRoute.get(
  "/chat",
  isAuthenticated,
  wrapper(chatController.getAllChatHistory)
);
chatRoute.get(
  "/chat/:id",
  isAuthenticated,
  wrapper(chatController.getChatHistory)
);
chatRoute.post(
  "/chat/:id",
  isAuthenticated,
  wrapper(chatController.deleteChat)
);

export default chatRoute;
