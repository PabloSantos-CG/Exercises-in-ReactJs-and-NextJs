import { Item } from "../../types/Item";

type Add = {
  type: "add";
  payload: {
    text: string;
  };
};

type ToggleCheck = {
  type: "toggle";
  payload: {
    id: number;
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

type ListActions = Add | ToggleCheck | RemoveTask | RemoveAll;

export const listReducer = (list: Item[], { type, payload }: ListActions): Item[] => {
  switch (type) {
    case "add":
      if (payload.text.trim() !== "") {
         
      }
      
      
    // case "toggle":
      
    // case "remove":
      
    // case "removeAll":
    default:
      return list 
  }
};
