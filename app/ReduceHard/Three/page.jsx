'use client'
import React, { useState } from 'react'

const SalesAnalysisComponent = () => {
  const sales = [
    { product: 'Laptop', price: 1000, quantity: 2 },
    { product: 'Phone', price: 500, quantity: 5 },
    { product: 'Headphones', price: 100, quantity: 10 },
    { product: 'Monitor', price: 200, quantity: 1 },
    { product: 'Keyboard', price: 50, quantity: 3 },
  ]

  const [totalSales, setTotalSales] = useState(0)
  const [averagePrice, setAveragePrice] = useState(0)

  const calculateSales = () => {
    const Caculation = sales.reduce(
      (acc, Element) => {
        acc.totalSales += Element.price * Element.quantity
        acc.price += Element.price
        acc.quantity += Element.quantity

        acc.product.push({
          Name: Element.product,
          price: Element.price,
          quantity: Element.quantity,
          avgprice: Element.price / Element.quantity,
        })
        return acc
      },
      { totalSales: 0, price: 0, quantity: 0, product: [] }
    )

    setTotalSales(Caculation.totalSales)
    setAveragePrice(Caculation.price / Caculation.quantity)
  }

  return (
    <div>
      <h1>Sales Analysis</h1>
      <p>Sales Data: {JSON.stringify(sales)}</p>
      <p>Total Sales: {totalSales}</p>
      <p>Average Price: {averagePrice}</p>
      <button onClick={calculateSales}>Calculate Sales</button>
    </div>
  )
}

export default SalesAnalysisComponent
