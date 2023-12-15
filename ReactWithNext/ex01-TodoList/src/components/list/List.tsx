
import React from "react";
import Button from "../button/Button";

type Props = {
  checked: boolean;
  spanContent: string;
  classNameCheckbox: string;
  removeItem: () => void;
  toggleItem: () => void;
};

export default function List({
  checked,
  spanContent,
  classNameCheckbox,
  removeItem,
  toggleItem,
}: Props) {
  return (
    <li className="flex items-center justify-between gap-x-2 mb-2 hover:bg-gray-50">
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleItem}
        className="cursor-pointer"
      />
      <span className={`truncate ${classNameCheckbox}`}>{spanContent}</span>
      <Button
        content="Remover"
        className="bg-red-700 ml-auto"
        event={removeItem}
      />
    </li>
  );
}
