import React from "react";
import Button from "../button/Button";

type Props = {};

export default function Form({}: Props) {
  return (
    <form>
      <input
        className="border-2 border-solid"
        type="text"
        placeholder="Ler 10 páginas..."
        required
      />
      <Button content="ADICIONAR" />
    </form>
  );
}
