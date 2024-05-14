import { createContext, useState, ReactNode, useEffect, FC } from "react";

interface User {
  username: string;
}

interface AppState {
  user: User | null;
}

interface AppContextProps {
  state: AppState;
  login: (user: User) => void;
  logout: () => void;
}

const initialState: AppState = {
  user: null,
};

const AppContext = createContext<AppContextProps>({
  state: initialState,
  login: () => {},
  logout: () => {},
});

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialState);

  const login = (user: User) => {
    setState({ user });
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setState({ user: null });
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      setState({ user: JSON.parse(storedUser) });
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
