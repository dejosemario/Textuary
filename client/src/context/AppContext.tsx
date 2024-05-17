import {
  FC,
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { AppContextType, ChatData, User, UserState } from "../types";

const initialUserState: UserState = {
  user: null,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userState, setUserState] = useState<UserState>(initialUserState);

  const [chatData, setChatData] = useState<ChatData>({
    loading: "idle",
    chatActive: false,
    chatBotMessage: null,
    currentConversationId: "",
    messagesList: [],
    chatHistory: {},
  });

  const login = (user: User) => {
    setUserState({ user });
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUserState({ user: null });
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUserState({ user: JSON.parse(storedUser) });
    }
  }, []);

  const contextValue: AppContextType = {
    userState,
    login,
    logout,
    chatData,
    setChatData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
