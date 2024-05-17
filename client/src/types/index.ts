import { Dispatch, SetStateAction } from "react";

type StateSetter<T> = Dispatch<SetStateAction<T>>;
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

export interface User {
  username: string;
}

export interface UserState {
  user: User | null;
}

export interface AppContextType {
  chatData: ChatData;
  currentMessages: ChatMessage[];
  isMenuOpen: boolean;
  isAvatarOpen: boolean;
  setChatData: StateSetter<ChatData>;
  handleHistoryClick: (history: ChatHistory) => void;
  setCurrentMessages: StateSetter<ChatMessage[]>;
  setIsMenuOpen: StateSetter<boolean>;
  setIsAvatarOpen: StateSetter<boolean>;
}
