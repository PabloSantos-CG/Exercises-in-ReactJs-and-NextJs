"use client";
import { useUsers } from "@/utils/queries";

export default function Home() {
  const users = useUsers();
  
  return (
    <>
      <h1 className="text-lg text-center m-5">Let's practice - TanStack Query</h1>
      <ul>
        {users.isLoading && "Fazendo requisição, aguarde..."}
        {users.data && 
          users.data.map(value => 
          <li key={value.id}>
            <strong>Nome: </strong>{value.name}<br/>
            <strong>E-mail: </strong>{value.email}<br/><br/>
          </li>
        )}
      </ul>
    </>
  );
}
