import React from "react";

type Props = { user: string; handleLogOut: () => void };

export default function Connected({ user, handleLogOut }: Props) {
  return (
    <div>
      <p>
        O usuário
        <span className=" p-2 m-2 mr-4 rounded relative">
          <u>{user}</u>
          <span
            className="
            animate-ping w-2 h-2 rounded-full bg-green-300 absolute -right-1 -top-0"
          ></span>
        </span>
        está conectado!
      </p>
      <button
        className="
          border border-transparent hover:border-white p-2 mt-4 rounded ease-linear duration-300
        "
        onClick={handleLogOut}
      >
        Desconectar
      </button>
    </div>
  );
}
