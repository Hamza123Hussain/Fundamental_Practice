'use client'
import React, { useState } from 'react'

const initialProduct = {
  id: 1,
  name: 'Product A',
  rating: 3, // Ratings are between 1 and 5
}

const ProductRatingComponent = () => {
  const [product, setProduct] = useState(initialProduct)

  const incrementRating = () => {
    if (product.rating < 5) {
      setProduct((Element) => {
        return { ...Element, rating: Element.rating + 1 }
      })
    }
  }

  const decrementRating = () => {
    if (product.rating > 1) {
      setProduct((Element) => {
        return { ...Element, rating: Element.rating - 1 }
      })
    }
  }

  return (
    <div>
      <h1>Product Rating</h1>
      <p>Name: {product.name}</p>
      <p>Rating: {product.rating}</p>
      <button onClick={incrementRating}>+</button>
      <button onClick={decrementRating}>-</button>
    </div>
  )
}

export default ProductRatingComponent
