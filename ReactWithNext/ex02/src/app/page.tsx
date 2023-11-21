"use client";
import { User } from "@/types/User";
import { useEffect, useState } from "react";

export default function () {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonResponse = await response.json();
      setUsers(jsonResponse);
    } catch (error) {
      console.log("Ops... Algo deu errado :(");
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((value) => {
    //     setUsers(value);
    //     console.log(users);
    //   })
    //   .catch(() => {
    //     console.log("Error");
    //   })
    //   .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="
      h-screen
      flex flex-col justify-center items-center
      bg-slate-300
    "
    >
      <h1 className="text-xl mb-2">Usuários no sistema</h1>
      <ul
        className="
        max-h-96
        rounded
        p-2
        overflow-auto
        bg-white
        shadow-sm shadow-gray-700
        scrollbarMod
      "
      >
        {loading && "Carregando..."}
        {!loading &&
          users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              <strong>Nome e Sobrenome:</strong> {user.name} <br />
              <strong>Username:</strong> {user.username} <br />
              <strong>E-mail:</strong> {user.email} <br />
              <br />
            </li>
          ))}
        {!loading &&
          users.length === 0 &&
          "Não encontramos nenhum usuário :( Sorry"}
      </ul>
    </div>
  );
}
