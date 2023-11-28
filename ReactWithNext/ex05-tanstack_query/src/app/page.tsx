"use client";
import { usePosts } from "@/queries/queries";
import { addPost } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const limit = 3;
  const posts = usePosts(limit, page);
  const addMutation = useMutation({
    mutationFn: addPost,
  });

  const handleClickBack = () => {
    setPage(page === 0 ? 0 : page - 1);
  };

  const handleClickNext = () => {
    setPage(page + 1);
  };

  const handleAddPost = () => {
    addMutation.mutate({
      userId: 1,
      title: "Enviando qualquer coisa",
      body: "Qualquer coisa como dito anteriormente...",
    });
  };

  return (
    <>
      <h1 className="text-lg text-center m-5">
        Let's practice - TanStack Query
      </h1>

      <div className="border border-white p-2 m-2">
        <p>Enviar um post</p>
        <button
          className={`
            border border-white p-1
            ${addMutation.isIdle ? "border-yellow-400" : ""}
            `}
          disabled={addMutation.isPending}
          onClick={handleAddPost}
        >
          Enviar
        </button>
          <p>
            {addMutation.isIdle && "Ocioso..."}
            {addMutation.isPending && "Carregando..."}
            {addMutation.isSuccess && "Sucesso!"}
          </p>
      </div>

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
              <span>
                <strong>Título:</strong> {post.title}
              </span>
              <br />
              <span>
                <strong>Conteúdo:</strong> {post.body}
              </span>
              <br />
              <br />
            </li>
          ))}
      </ul>
    </>
  );
}
