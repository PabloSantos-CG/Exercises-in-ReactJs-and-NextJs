"use client";

import { User } from "@/types/User";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { api } from "@/utils/api";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState<User[]>([]);
  const [logged, setLogged] = useState<boolean>(false);

  const getUsers = async (token: string) => {
    const { data } = await api.get("/list", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Feita request", data);
    setData(data);
  };

  useEffect(() => {
    const { nextAuthToken: token } = parseCookies();
    if (token) {
      getUsers(token);
      setLogged(true);
    }
  }, []);

  return (
    <main className="h-full flex items-center justify-center bg-[#012030]">
      {!logged && (
        <div className="text-white">
          <p>
            Você precisa fazer o login ou registro para ter acesso aos usuários
            !
          </p>
          <div className="flex justify-around mt-5">
            <Link
              href="/login"
              className="
                bg-black border border-black hover:bg-transparent hover:border-white
                duration-300 
                py-2 px-8 rounded
              "
            >
              Entrar
            </Link>

            <Link
              href="/register"
              className="
                bg-black border border-black hover:bg-transparent hover:border-white
                duration-300 
                py-2 px-6 rounded
              "
            >
              Registrar
            </Link>
          </div>
        </div>
      )}
      {logged && (
        <div
          className="
            max-sm:w-full w-3/4 max-w-3xl  min-h-[520px]
            bg-white rounded-sm 
          "
        >
          <div className="flex items-center justify-center h-[70px] border bg-gray-50">
            <h1 className="text-2xl font-semibold">Usuários Existentes</h1>
          </div>

          <div className="h-[450px]">
            <ul className="w-full h-full p-3 overflow-auto">
              {data.length === 0 && <li>Não existem usuários...</li>}
              {data &&
                data.length > 0 &&
                data.map((user, index) => <li key={index}>{user.email}</li>)}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
