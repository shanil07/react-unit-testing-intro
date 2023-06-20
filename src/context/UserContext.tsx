import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../types/user";

type Context = {
  user: User | null;
  updateUser(user: User | null): void;
};

const Context = createContext<Context | undefined>(undefined);
Context.displayName = "UserContext";

const useUserContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useUserContext must be used withing UserContextProvider");
  }
  return context;
};

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const context: Context = {
    updateUser: setUser,
    user,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { useUserContext, UserContextProvider };
