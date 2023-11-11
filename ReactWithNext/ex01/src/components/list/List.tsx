import React from "react";
import Button from "../button/Button";

type Props = {};

export default function List({}: Props) {
  return (
    <li className="flex items-center justify-between gap-x-2 mb-2">
      <input type="checkbox"/>
      <span className="truncate">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam
        consequatur suscipit. Neque, hic aperiam! Ex eos quis, magnam aliquid
        nam ab voluptate accusamus quas doloremque, eveniet reiciendis. Sunt,
        nihil!
      </span>
      <Button content="Remover" className="bg-red-300"/>
    </li>
  );
}
