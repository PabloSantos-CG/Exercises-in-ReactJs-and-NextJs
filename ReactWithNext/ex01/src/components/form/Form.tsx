import React, { useReducer, useState } from "react";
import Button from "../button/Button";
import ListContain from "../list/ListContain";
import List from "../list/List";
import { Item } from "../../types/Item";
import { listReducer } from "../reducers/listReducer";

export default function Form() {
  const [items, setItem] = useState<Item[]>([]);
  
  const [list, dispatch] = useReducer(listReducer, [])
  
  const [input, setInput] = useState("");
  const [borderColorBtn, setBorderColorBtn] = useState("");

  //HandleAddTask deve ser mudada para um argumentos
  //texto(que vai vim do input)

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const random = Math.floor(Math.random() * 99999);
      setItem([...items, { id: random, spanContent: input, checked: false }]);
    }
    setInput("");
  };

  const handleRemoveTask = (id: number) => {
    setItem(items.filter((item) => item.id !== id));
  };

  const toggleCheck = (id: number) => {
    const newItems = [...items];

    for (let i in newItems) {
      if (newItems[i].id === id) {
        console.log(newItems[i]);
        newItems[i].checked = !newItems[i].checked;
        setItem(newItems);
      }
    }
  };

  const clearList = () => {
    if (items.length > 0) {
      const confirmation = confirm("Excluir todas as tarefas?");
      if (confirmation) setItem([]);
    } else {
      setBorderColorBtn("border-red-500");
      setTimeout(() => {
        setBorderColorBtn("");
      }, 800);
    }
  };

  return (
    <>
      <form className="flex gap-x-2 max-sm:flex-wrap">
        <input
          className="flex-1 border-2 border-solid p-2 rounded"
          type="text"
          placeholder="Exemplo: Ler 10 páginas..."
          required
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
        />
        <Button content="ADICIONAR" event={handleAddTask} />
      </form>

      <ListContain>
        {(items.length > 0 &&
          items.map((item) => (
            <List
              key={item.id}
              itemChecked={item.checked}
              classNameCheckbox={item.checked ? "line-through" : ""}
              spanContent={item.spanContent}
              removeItem={() => handleRemoveTask(item.id)}
              toggleItem={() => toggleCheck(item.id)}
            />
          ))) || (
          <span className="text-xs text-gray-400">
            Experimente adicionar uma nova tarefa...
          </span>
        )}
      </ListContain>

      <div className="flex justify-between">
        <p>Tarefas: {items.length}</p>
        <Button
          content="Limpar lista"
          className={`bg-gray-500 ${borderColorBtn}`}
          event={clearList}
        />
      </div>
    </>
  );
}
