import { Types } from "mongoose";
import Chat from "../models/chat.model";
import axios from "axios";

const generateImage = async (prompt: string): Promise<any> => {
  try {
    const payload = {
      method: "POST",
      url: process.env.API_ENDPOINT,
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "ai-text-to-image-generator-api.p.rapidapi.com",
      },
      data: { inputs: prompt },
    };

    const response = await axios.request(payload);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error generating image: ${error}`);
  }
};

export const startNewChat = async (userId: Types.ObjectId, title: String) => {
  const newChat = new Chat({
    user: userId,
    title: title.substring(0, 30),
    messages: [],
  });
  await newChat.save();
  return newChat;
};

export const addMessageToChat = async (
  chatId: Types.ObjectId,
  sender: "user" | "model",
  content: string,
  imageUrl?: string
) => {
  const chat = await Chat.findById(chatId);
  if (chat) {
    chat.messages.push({ sender, content, imageUrl });
    await chat.save();
    return chat;
  }
};

export const handleChatProcess = async (
  userId: Types.ObjectId,
  chatId: Types.ObjectId,
  prompt: string
) => {
  // Check if there is an existing chat id
  if (!chatId) {
    const chat = await startNewChat(userId, prompt);
    chatId = chat._id;
  }

  // Add the user's prompt to the chat
  await addMessageToChat(chatId, "user", prompt);

  const modelResponse = await generateImage(prompt);
  const imageUrl = modelResponse.url;

  // Update the chat with the model's response.
  const updatedChat = await addMessageToChat(
    chatId,
    "model",
    "Here is the generated image",
    imageUrl
  );
  return updatedChat;
};

export const getChatHistory = async (
  userId: Types.ObjectId,
  chatId?: Types.ObjectId
) => {
  const query: any = { user: userId };
  if (chatId) {
    query._id = chatId;
  }
  const chats = await Chat.find(query);
  return chats;
};

export const deleteChat = async (
  userId: Types.ObjectId,
  chatId?: Types.ObjectId
) => {
  const query: any = { user: userId };
  if (chatId) {
    query._id = chatId;
  }
  const chat = await Chat.findOneAndDelete({ _id: chatId, user: userId });
  return chat;
};
