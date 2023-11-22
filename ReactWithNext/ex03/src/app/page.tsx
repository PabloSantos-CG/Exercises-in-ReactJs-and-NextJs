"use client";
import Connected from "@/components/Connected";
import Connecting from "@/components/Connecting";
import { LogUserProvider } from "@/contexts/logUserContext";
import { useState } from "react";

export default function Home() {
  const [render, setRender] = useState(false);
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim() !== "") setRender(() => !render);
    else alert("Você precisa informar o usuário!");
  };

  return (
    <div
      className="
      h-screen
      flex flex-col justify-center items-center gap-y-4
    "
    >
      <h1 className="text-lg">Criando contexto para usuário logado</h1>
      <LogUserProvider>
        {render && <Connected handleLogOut={handleClick} user={input} />}
        {!render && (
          <Connecting
            handleLogIn={handleClick}
            input={input}
            handleOnChange={(ev) => setInput(ev.target.value)}
          />
        )}
      </LogUserProvider>
    </div>
  );
}
