'use client'
import React, { useState } from 'react'

const Page = () => {
  const initialFavorites = [
    { id: 1, name: 'Item A' },
    { id: 2, name: 'Item B' },
  ]

  const [favorites, setFavorites] = useState(initialFavorites)

  const addFavorite = (item) => {
    setFavorites((Element) => {
      const Found = Element.find((element) => element.id === item.id)
      if (Found) {
        return [...Element]
      }
      return [...Element, { ...item }]
    })
  }

  const removeFavorite = (itemId) => {
    setFavorites((Element) =>
      Element.filter((element) => element.id !== itemId)
    )
  }

  return (
    <div>
      <h1>Favorite Items</h1>
      <ul>
        {favorites.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeFavorite(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addFavorite({ id: 3, name: 'Item C' })}>
        Add Item C to Favorites
      </button>
    </div>
  )
}

export default Page
