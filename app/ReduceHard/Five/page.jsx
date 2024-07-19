'use client'
import React, { useState } from 'react'

const SalesByCategoryComponent = () => {
  const sales = [
    { category: 'Electronics', amount: 300, date: '2024-07-01' },
    { category: 'Clothing', amount: 150, date: '2024-07-02' },
    { category: 'Electronics', amount: 450, date: '2024-07-03' },
    { category: 'Clothing', amount: 200, date: '2024-07-04' },
    { category: 'Home & Kitchen', amount: 100, date: '2024-07-05' },
  ]

  const [totalSalesByCategory, setTotalSalesByCategory] = useState({})
  const [highestSalesCategory, setHighestSalesCategory] = useState(null)

  const calculateSales = () => {
    const Catorgory = sales.reduce((acc, Element) => {
      const elementfound = acc.find((e) => e.category == Element.category)
      if (elementfound) {
        elementfound.total += Element.amount
      } else {
        acc.push({ category: Element.category, total: Element.amount })
      }
      return acc
    }, [])
    setTotalSalesByCategory(Catorgory)

    const highestproduct = Catorgory.reduce(
      (acc, Element) => {
        return Element.total > acc.total ? Element : acc
      },
      { category: '', total: 0 }
    )

    setHighestSalesCategory(highestproduct)
    // Implement logic here to calculate total sales by category and identify the category with highest sales
  }

  return (
    <div>
      <h1>Sales by Category</h1>
      <p>Sales Data: {JSON.stringify(sales)}</p>
      <p>Total Sales by Category: {JSON.stringify(totalSalesByCategory)}</p>
      <p>
        Category with Highest Sales:{' '}
        {highestSalesCategory
          ? `${highestSalesCategory.category} - $${highestSalesCategory.total}`
          : 'N/A'}
      </p>
      <button onClick={calculateSales}>
        Calculate Sales and Find Top Category
      </button>
    </div>
  )
}

export default SalesByCategoryComponent
