"use client";
import { usePosts } from "@/queries/queries";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const limit = 3;
  const posts = usePosts(limit, page);

  const handleClickBack = () => {
    setPage(page === 0 ? 0 : page - 1);
  };

  const handleClickNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1 className="text-lg text-center m-5">
        Let's practice - TanStack Query
      </h1>
      <div className="border border-white p-2 m-2">
        <p>Página atual: {page}</p>
        <button
          onClick={handleClickBack}
          className="border border-white p-2 mr-3"
        >
          Voltar
        </button>
        <button onClick={handleClickNext} className="border border-white p-2">
          Avançar
        </button>
      </div>
      <ul>
        {posts.isLoading && "Fazendo requisição, aguarde..."}
        {posts.data &&
          posts.data.map((post) => (
            <li>
              <span><strong>Título:</strong> {post.title}</span><br />
              <span><strong>Conteúdo:</strong> {post.body}</span><br /><br />
            </li>
          ))}
      </ul>
    </>
  );
}
