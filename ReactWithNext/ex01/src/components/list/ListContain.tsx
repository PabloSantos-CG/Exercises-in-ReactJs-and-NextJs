import React, { ReactNode } from "react";
import style from "./style.module.css"

type props = {
  children: ReactNode;
};

export default function ListContain({ children }: props) {
  return (
    <ul
      className={`
      h-96
      rounded
      p-2
      overflow-auto
      bg-white
      shadow-sm
      ${style.scrollbarMod}
      `}
    >
      {children}
    </ul>
  );
}
