'use client'
import React, { useState } from 'react'

const ProductInventoryManagementComponent = () => {
  const products = [
    { name: 'Laptop', price: 1000, quantity: 3 },
    { name: 'Phone', price: 500, quantity: 5 },
    { name: 'Headphones', price: 100, quantity: 10 },
    { name: 'Laptop', price: 1000, quantity: 2 }, // Same product with different quantity
  ]

  const [totalValue, setTotalValue] = useState(0)
  const [highestQuantityProduct, setHighestQuantityProduct] = useState(null)

  const calculateTotals = () => {
    const result = products.reduce(
      (acc, element) => {
        // Check if the product is already in the accumulator
        const existingProduct = acc.products.find(
          (product) => product.name === element.name
        )

        if (existingProduct) {
          // If it exists, update its quantity
          existingProduct.quantity += element.quantity
        } else {
          // If it doesn't exist, add it to the accumulator
          acc.products.push({
            name: element.name,
            price: element.price,
            quantity: element.quantity,
          })
        }

        // Calculate total value
        acc.totalValue += element.quantity * element.price

        return acc
      },
      { totalValue: 0, products: [] }
    )
    console.log(result.products)

    setTotalValue(result.totalValue)

    const highestQtyProduct = result.products.reduce(
      (acc, product) => {
        return product.quantity > acc.quantity ? product : acc
      },
      { quantity: 0 }
    )
    setHighestQuantityProduct(highestQtyProduct.name)
  }

  return (
    <div>
      <h1>Product Inventory Management</h1>
      <p>Products: {JSON.stringify(products)}</p>
      <p>Total Inventory Value: {totalValue}</p>
      <p>Product with Highest Quantity: {highestQuantityProduct}</p>
      <button onClick={calculateTotals}>Calculate Totals</button>
    </div>
  )
}

export default ProductInventoryManagementComponent
