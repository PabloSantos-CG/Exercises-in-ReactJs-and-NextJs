import React from "react";

type Props = {
  className?: string;
  content: string;
  event?: () => void;
};

export default function Button({ className, content, event }: Props) {
  return (
    <button
      className={`
      ${className || "bg-zinc-950"}
      border-2 border-solid p-2
      text-white
      rounded
      text-xs
      hover:bg-transparent hover:text-black
      duration-500
      shadow-md
      `}
      onClick={event}
    >
      {content}
    </button>
  );
}
