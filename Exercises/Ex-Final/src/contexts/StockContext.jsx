import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: PropTypes.node
}

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("React-Stock")
    
    if(!storedItems) {
      return []
    } else {
      const items = JSON.parse(storedItems)

      items.forEach(item => {
        item.createdAt = new Date(item.createdAt)
        item.updatedAt = new Date(item.updatedAt)
      })

      return items
    }
  })
  
  const addItem = (item) => {
    setItems(currentState => {
      const updatedItem = [item, ...currentState]
      localStorage.setItem("React-Stock", JSON.stringify(updatedItem))
    })
  }

  const deleteItem = (itemID) => {
    setItems(currentState => {
      const updatedItem = currentState.filter(item => item.id !== itemID)
      localStorage.setItem("React-Stock", JSON.stringify(updatedItem))

      return updatedItem
    })
  }

  const getItem = (itemID) => {
    return items.find(item => item.id === +itemID)
  }

  const updateItem = (itemID, newAttributes) => {
    setItems(currentState => {
      const itemIndex = currentState.findIndex(item => item.id === +itemID)
      const updatedItems = [...currentState]
      Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() })
    })
  }
  
  const stock = {
    items,
    addItem,
    deleteItem,
    getItem,
    updateItem
  }

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}