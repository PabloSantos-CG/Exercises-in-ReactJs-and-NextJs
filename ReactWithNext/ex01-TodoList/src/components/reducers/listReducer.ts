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
      return list.map((item) => {
        if (item.id === payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

    case "removeAll":
      return [];

    default:
      return list;
  }
};
