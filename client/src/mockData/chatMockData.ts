import { ChatHistory } from "../types";

export const mockChatHistory: ChatHistory[] = [
  {
    user: "User",
    title: "Generate healthy vegetable pictures",
    messages: [
      {
        sender: "user",
        content: "Hi there!",
        timestamp: new Date("2023-01-01T10:00:00Z"),
      },
      {
        sender: "model",
        content: "Hello! How can I assist you today?",
        timestamp: new Date("2023-01-01T10:01:00Z"),
        imageUrl: "",
      },
    ],
    startedAt: new Date("2023-01-01T10:00:00Z"),
    updatedAt: new Date("2023-01-01T10:05:00Z"),
  },
  {
    user: "User",
    title: "Show me farming equipments",
    messages: [
      {
        sender: "user",
        content: "Translate this text.",
        timestamp: new Date("2023-02-01T11:00:00Z"),
      },
      {
        sender: "model",
        content: "Sure, translating now...",
        timestamp: new Date("2023-02-01T11:01:00Z"),
        imageUrl: "",
      },
    ],
    startedAt: new Date("2023-02-01T11:00:00Z"),
    updatedAt: new Date("2023-02-01T11:10:00Z"),
  },
];
