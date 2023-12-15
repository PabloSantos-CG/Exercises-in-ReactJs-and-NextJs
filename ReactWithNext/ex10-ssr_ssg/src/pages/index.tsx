import { ReactNode, useEffect, useState } from "react";
import { Data } from "./api/hello";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  const serverSideRedering: Data = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/hello`
  ).then((res) => res.json());

  return {
    props: { serverSideRedering },
  };
};

export default function Home(props: {
  children?: ReactNode;
  serverSideRedering?: Data;
}) {
  const [clientSide, setClientSide] = useState<Data>();

  useEffect(() => {
    clientSideRendering();
  }, []);

  const clientSideRendering = async () => {
    const data = await fetch("/api/hello").then((res) => res.json());
    setClientSide(data);
  };

  return (
    <div className="">
      <h1 className="text-center">Testando renderizações</h1>

      <Link
        href={"/products"}
        className="p-2 m-2 bg-blue-300 rounded-md hover:bg-transparent duration-500"
      >
        Acessar products
      </Link>

      <div className="flex justify-center m-6 gap-x-40">
        <div>
          <p className="font-bold">Gerado no CLIENT:</p>
          <p>Hora da requisição: {clientSide?.date}</p>
        </div>
        <div>
          <p className="font-bold">Gerado no SERVER:</p>
          <p>Hora da requisição: {props.serverSideRedering?.date}</p>
        </div>
      </div>
    </div>
  );
}
