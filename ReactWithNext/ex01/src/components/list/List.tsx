import React from "react";
import Button from "../button/Button";

type Props = {
  itemChecked: boolean;
  spanContent: string;
  classNameCheckbox:string;
  removeItem: () => void;
  toggleItem: () => void;
};

export default function List({
  itemChecked,
  spanContent,
  classNameCheckbox,
  removeItem,
  toggleItem
}: Props) {
  return (
    <li className="flex items-center justify-between gap-x-2 mb-2">
      <input
        type="checkbox"
        checked={itemChecked}
        onClick={toggleItem}
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
