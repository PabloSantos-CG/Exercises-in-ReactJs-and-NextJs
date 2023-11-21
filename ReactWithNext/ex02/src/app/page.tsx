"use client";
import { User } from "@/types/User";
import { useEffect, useState } from "react";

export default function () {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((value) => {
        setUsers(value);
        console.log(users);
      });
  }, []);

  return (
    <div className="
      h-screen
      flex flex-col justify-center items-center
      bg-slate-300
    ">
      <h1 className="text-xl mb-2">Usuários no sistema</h1>
      <ul className="
        max-h-96
        rounded
        p-2
        overflow-auto
        bg-white
        shadow-sm
      ">
        {users.map(user => 
          <li key={user.id}>
            Nome e Sobrenome: {user.name} <br/>
            Username: {user.username} <br/>
            E-mail: {user.email} <br/>
            <br />
          </li>
        )}
      </ul>
    </div>
  );
}
