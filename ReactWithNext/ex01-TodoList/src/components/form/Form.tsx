"use client";

import React, { useEffect, useReducer, useState } from "react";
import Button from "../button/Button";
import ListContain from "../list/ListContain";
import List from "../list/List";
import { listReducer } from "../reducers/listReducer";

export default function Form() {
  const [list, dispatch] = useReducer(
    listReducer,

    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("dbTask") || "[]")
      : []
  );

  const [input, setInput] = useState("");
  const [borderColorBtn, setBorderColorBtn] = useState("");

  const contCheckedList = () => {
    let cont = 0;

    list.forEach((value) => {
      if (value.checked === true) cont++;
    });
    return cont;
  };

  const handleAddTask = () => {
    if (input.trim() === "") return false;

    dispatch({ type: "add", payload: { text: input } });
    setInput("");
  };

  const handleRemoveTask = (id: number) => {
    dispatch({ type: "remove", payload: { id } });
  };

  const clearList = () => {
    if (list.length > 0) {
      const confirmation = confirm("Excluir todas as tarefas?");
      if (confirmation) dispatch({ type: "removeAll", payload: {} });
    } else {
      setBorderColorBtn("border-red-500");
      setTimeout(() => {
        setBorderColorBtn("");
      }, 800);
    }
  };

  const toggleCheck = (id: number) => {
    dispatch({ type: "toggle", payload: { id } });
  };

  useEffect(() => {
    localStorage.setItem("dbTask", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <form
        className="flex gap-x-2 max-sm:flex-wrap"
        onSubmit={(ev) => ev.preventDefault()}
      >
        <input
          className="flex-1 border-2 border-solid p-2 rounded"
          type="text"
          placeholder="Exemplo: Ler 10 páginas..."
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
        />
        <Button content="ADICIONAR" event={handleAddTask} />
      </form>

      <ListContain>
        {list.length > 0 ? (
          list.map((item) => (
            <List
              key={item.id}
              checked={item.checked}
              classNameCheckbox={
                item.checked ? "line-through text-green-500 italic" : ""
              }
              spanContent={item.spanContent}
              removeItem={() => handleRemoveTask(item.id)}
              toggleItem={() => toggleCheck(item.id)}
            />
          ))
        ) : (
          <span className="text-xs text-gray-400">
            Experimente adicionar uma nova tarefa...
          </span>
        )}
      </ListContain>

      <div className="flex justify-between">
        <p>Tarefas: {list.length}</p>
        <p>Completas: {contCheckedList()}</p>
        <Button
          content="Limpar lista"
          className={`bg-gray-500 ${borderColorBtn}`}
          event={clearList}
        />
      </div>
    </>
  );
}
