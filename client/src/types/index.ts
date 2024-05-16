export type ChatMessage = {
  sender: "user" | "model";
  content: string;
  timestamp: Date;
  imageUrl?: string | null | undefined;
};
export type ChatHistory = {
  user: string;
  title: string;
  messages: ChatMessage[];
  startedAt: Date;
  updatedAt: Date;
};

export type ChatData = {
  loading:
    | "idle"
    | "translating"
    | "translated"
    | "generating"
    | "generated"
    | "error";
  chatActive: boolean;
  chatBotMessage: any;
  currentConversationId: "";
  messagesList: ChatMessage[];
  chatHistory: any;
};
