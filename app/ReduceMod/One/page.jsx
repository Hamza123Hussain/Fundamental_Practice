'use client'
import React, { useState } from 'react'

const ProductOfNumbersComponent = () => {
  const numbers = [1, 2, 3, 4, 5]
  const [product, setProduct] = useState(1)

  const calculateProduct = () => {
    const product = numbers.reduce((acc, Element) => {
      return acc * Element
    }, 1)
    setProduct(product)
  }

  return (
    <div>
      <h1>Product of Numbers</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Product: {product}</p>
      <button onClick={calculateProduct}>Calculate Product</button>
    </div>
  )
}

export default ProductOfNumbersComponent
