import React, { useState } from "react";
import Button from "../button/Button";
import ListContain from "../list/ListContain";
import List from "../list/List";

type Props = {};

type items = {
  id: number;
  spanContent: string;
  checked: boolean;
};

export default function Form({}: Props) {
  const [items, setItem] = useState<items[]>([]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input !== "") {
      const random = Math.floor(Math.random() * 99999);
      setItem([...items, { id: random, spanContent: input, checked: false }]);
      setInput("");
    }
  };

  const removeItem = (id: number) => {
    setItem(items.filter((item) => item.id !== id));
  };

  const toggleCheck = (id: number) => {
    console.log("entrou na função");

    const newItems = [...items];
    for (let i in newItems) {
      if (newItems[i].id === id) {
        console.log(newItems[i]);
        newItems[i].checked = !newItems[i].checked;
        setItem(newItems);
      }
    }
    console.log("Saiu da função")
  };

  return (
    <>
      <form>
        <input
          className="border-2 border-solid"
          type="text"
          placeholder="Ler 10 páginas..."
          required
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
        />
        <Button content="ADICIONAR" event={handleClick} />
      </form>

      <ListContain>
        {items.map((item) => (
          <List
            key={item.id}
            itemChecked={item.checked}
            classNameCheckbox={item.checked ? "line-through" : ""}
            spanContent={item.spanContent}
            removeItem={() => removeItem(item.id)}
            toggleItem={() => toggleCheck(item.id)}
          />
        ))}
      </ListContain>
    </>
  );
}
