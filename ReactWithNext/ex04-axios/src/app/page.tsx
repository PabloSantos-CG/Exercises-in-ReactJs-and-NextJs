"use client";

import { api } from "@/utils/api";

export default function Home() {
  //utilizando queryString
  //para modificar o parâmetro da string de requisição de maneira dinâmica
  const paramsIdUser = { id: 2 };

  /*
    FormData
    const data = new FormData();
    data.append("Name", "Guio")
    console.log(data);
  */

  const handleClick = () => {
    //fazendo um get
    api.get("/users", { params: paramsIdUser }).then((promise) => {
      console.log(promise.data);
    });

    //fazendo um post
    api.post("/posts", {
      userId: 98,
      title: "Título super legal",
      content: "Qualquer título...",
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Fazer requisição</button>
    </div>
  );
}
