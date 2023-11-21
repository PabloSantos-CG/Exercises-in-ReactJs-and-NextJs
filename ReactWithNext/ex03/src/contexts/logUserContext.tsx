import React, { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type LogUserType = {
  inputName: string;
  setInputName: (s: string) => void;
};

export const LogContext = createContext<LogUserType | null>(null);

export function LogUserProvider({ children }: Props) {
  const [inputName, setInputName] = useState("");
  
  return (
    <LogContext.Provider value={{ inputName, setInputName }}>
      {children}
    </LogContext.Provider>
  );
}
