import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function DeleteButton({ itemName, itemID }) {
  const { deleteItem } = useStock()
  const navigate = useNavigate()

  const handleDelete = () => {
    if(confirm(`Deseja excluir o item:  ${itemName}  ?`)) {
      deleteItem(itemID)
      navigate("/items")
    }
  }

  return (
    <button
      className="button is-danger is-small"
      onClick={handleDelete}
    >
      Excluir
    </button>
  )
}