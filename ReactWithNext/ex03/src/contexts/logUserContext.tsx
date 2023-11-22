import React, { ReactNode, createContext } from "react";

type Props = {
  children: ReactNode;
};

type LogUserType = {};

export const LogContext = createContext<LogUserType | null>(null);

export function LogUserProvider({ children }: Props) {
  return <LogContext.Provider value={{}}>{children}</LogContext.Provider>;
}
