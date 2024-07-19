'use client'
import React, { useState } from 'react'

const ProductOfUniqueOddNumbersComponent = () => {
  const numbers = [2, 3, 4, 3, 5, 7, 7, 9]
  const [uniqueOddProduct, setUniqueOddProduct] = useState(1)

  const calculateUniqueOddProduct = () => {
    const uniqueoddarray = numbers.reduce((acc, element) => {
      if (element % 2 !== 0 && !acc.includes(element)) {
        acc.push(element)
      }
      return acc
    }, [])
    console.log(uniqueoddarray)
    const Product = uniqueoddarray.reduce((acc, element) => {
      return acc * element
    }, 1)

    setUniqueOddProduct(Product)
  }

  return (
    <div>
      <h1>Product of Unique Odd Numbers</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Unique Odd Product: {uniqueOddProduct}</p>
      <button onClick={calculateUniqueOddProduct}>
        Calculate Unique Odd Product
      </button>
    </div>
  )
}

export default ProductOfUniqueOddNumbersComponent
