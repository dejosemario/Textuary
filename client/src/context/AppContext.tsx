import { FC, createContext, useState, ReactNode, useContext } from "react";
import { AppContextType, ChatData, ChatHistory, ChatMessage } from "../types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  const [chatData, setChatData] = useState<ChatData>({
    loading: "idle",
    chatActive: false,
    chatBotMessage: null,
    currentConversationId: "",
    messagesList: [],
    chatHistory: {},
  });

  const [currentMessages, setCurrentMessages] = useState<ChatMessage[]>(
    chatData.messagesList
  );

  const handleHistoryClick = (history: ChatHistory) => {
    setIsMenuOpen(false);

    setCurrentMessages(history.messages);

    setChatData((prevData) => ({
      ...prevData,
      loading: "idle",
      chatActive: true,
    }));
  };

  const contextValue: AppContextType = {
    chatData,
    currentMessages,
    isMenuOpen,
    isAvatarOpen,
    setChatData,
    setCurrentMessages,
    handleHistoryClick,
    setIsMenuOpen,
    setIsAvatarOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
