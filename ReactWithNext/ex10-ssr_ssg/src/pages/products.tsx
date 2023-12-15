import React from "react";
import Link from "next/link";

type Props = {};

export default function products({}: Props) {
  return (
    <div className="p-4">
      products
      <Link
        href={"/"}
        className="p-2 m-2 bg-blue-300 rounded-md hover:bg-transparent duration-500"
      >
        Voltar
      </Link>
    </div>
  );
}
