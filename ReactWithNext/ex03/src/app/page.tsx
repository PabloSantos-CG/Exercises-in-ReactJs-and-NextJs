"use client";
import Connected from "@/components/Connected";
import Connecting from "@/components/Connecting";
import { LogUserProvider } from "@/contexts/logUserContext";
import { useState } from "react"

export default function Home() {
  const [render, setRender] = useState(false);
  
  const handleClick = () => {
    setRender(()=> !render)
  }

  return (
    <div
      className="
      h-screen
      flex flex-col justify-center items-center gap-y-4
    "
    >
      <h1 className="text-lg">Criando contexto para usuário logado</h1>
      <LogUserProvider>
        {!render && <Connecting handleLogIn={handleClick}/>}
        {render && <Connected handleLogOut={handleClick}/>}
      </LogUserProvider>
    </div>
  );
}
