import React, { ChangeEvent } from "react";

type Prop = {
  input: string;
  handleLogIn: () => void;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Connecting({
  handleLogIn,
  input,
  handleOnChange,
}: Prop) {
  return (
    <div className="flex flex-col gap-y-3">
      <input
        className="text-black p-2"
        type="text"
        value={input}
        onChange={handleOnChange}
      />
      <button
        className="
          border border-transparent hover:border-white p-2 rounded ease-linear duration-300
        "
        onClick={handleLogIn}
      >
        Conectar
      </button>
    </div>
  );
}
