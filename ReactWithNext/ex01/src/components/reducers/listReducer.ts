import { Item } from "../../types/Item";

type Add = {
  type: "add";
  payload: {
    text: string;
  };
};

type RemoveTask = {
  type: "remove";
  payload: {
    id: number;
  };
};

type RemoveAll = {
  type: "removeAll";
  payload: {};
};

type ToggleCheck = {
  type: "toggle";
  payload: {
    id: number;
  };
};

type ListActions = Add | RemoveTask | RemoveAll | ToggleCheck;

export const listReducer = (
  list: Item[],
  { type, payload }: ListActions
): Item[] => {
  switch (type) {
    case "add":
      return [
        ...list,
        {
          id: Math.floor(Math.random() * 99999),
          spanContent: payload.text,
          checked: false,
        },
      ];

    case "remove":
      return list.filter((item) => item.id !== payload.id);
      
    case "toggle":
      //Duplicando li
      const newItems = [...list];
      for (let i in newItems) {
        if (newItems[i].id === payload.id) {
          console.log(newItems[i]);
          newItems[i].checked = !newItems[i].checked;
          list = [...list, { ...newItems[i] }];
        }
      }
      return list
      
    case "removeAll":
      const confirmation = confirm("Excluir todas as tarefas?");
      confirmation? list = [] : list;

    default:
      return list;
  }
};
