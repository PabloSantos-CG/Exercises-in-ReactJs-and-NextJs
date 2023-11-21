import React, { ReactNode, createContext, useState } from "react";

type Props = {
  childrens: ReactNode;
};

type LogUserType = {
  inputName: string
  setInputName: (value:string) => void
};

export const LogContext = createContext<LogUserType | null>(null);

export default function LogUserProvider({ childrens }: Props) {
  const [input, setInput] = useState()
  //não está reconhecendo o state
  return(
    <LogContext.Provider value={}>
      {childrens}
    </LogContext.Provider>
  );
}
