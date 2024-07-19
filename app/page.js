'use client'
import React, { useState, useEffect } from 'react'

// Initial inventory data
const initialInventory = [
  { id: 1, name: 'Item A', quantity: 5 },
  { id: 2, name: 'Item B', quantity: 3 },
  { id: 3, name: 'Item C', quantity: 2 },
]

const InventoryComponent = () => {
  const [inventory, setInventory] = useState(initialInventory)

  // Function to increment the quantity of an item
  const incrementQuantity = (itemId) => {
    setInventory((element) => {
      const found = element.find((item) => item.id === itemId) // checking if item is in the array
      if (found) {
        // If the item is found, increment its quantity
        return element.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      // If the item is not found, return the current state
      return element
    })
  }

  // Function to decrement the quantity of an item
  const decrementQuantity = (itemId) => {
    setInventory((element) => {
      const found = element.find((item) => item.id === itemId)
      if (found) {
        if (found.quantity > 1) {
          // If the quantity is greater than 1, decrement the quantity
          return element.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          )
        } else if (found.quantity === 1) {
          // If the quantity is 1, remove the item from the inventory
          return element.filter((element) => element.id !== itemId)
        }
      }
      // If the item is not found, return the current state
      return element
    })
  }

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            <button onClick={() => decrementQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InventoryComponent

/*
Learnings from this question:

1. **State Management**: How to manage an array of objects in React state using `useState`.
2. **Finding Items**: Using array methods like `find` to locate items within the state.
3. **Updating Items**: Updating objects within an array in the state using `map`.
4. **Conditional Logic**: Implementing conditional logic to handle different scenarios, such as incrementing/decrementing quantities and removing items.
5. **Spread Operator**: Using the spread operator (`...`) to create new state objects and arrays, ensuring immutability.
6. **Rendering Lists**: Rendering a list of items from the state and adding interactive elements (buttons) to each list item.
7. **Event Handlers**: Attaching event handlers to elements to modify the state when actions are performed (e.g., incrementing/decrementing quantities).
8. **State Immutability**: Ensuring state immutability by returning new arrays and objects instead of modifying the existing state directly.
*/
