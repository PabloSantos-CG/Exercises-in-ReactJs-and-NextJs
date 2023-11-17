import { Item } from "@/types/Item"

export const getItemsLocalStorage = () => {
  const data = localStorage.getItem("dbTask")
  return data ? JSON.parse(data) as Item[] : []
}