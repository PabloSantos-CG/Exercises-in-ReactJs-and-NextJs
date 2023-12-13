import { useEffect, useState } from "react";
import { Data } from "./api/hello";

export default function Home() {
  const [clientSide, setClientSide] = useState<Data>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/api/hello").then((res) => res.json());
    setClientSide(data);
  };

  return (
    <div className="">
      <h1 className="text-center">Testando renderizações</h1>
      <div className="flex justify-center m-6 gap-x-40">
        <div>
          <p className="font-bold">CLIENT:</p>
          <p>Hora da requisição: {clientSide?.date.toString()}</p>
        </div>
        <div>
          <p className="font-bold">SERVER:</p>
          <p>Linha 2</p>
        </div>
      </div>
    </div>
  );
}
