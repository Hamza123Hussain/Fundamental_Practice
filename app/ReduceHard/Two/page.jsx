'use client'
import React, { useState } from 'react'

const CalculateAverageAndTotalComponent = () => {
  const transactions = [
    { type: 'income', amount: 200 },
    { type: 'expense', amount: 50 },
    { type: 'income', amount: 150 },
    { type: 'expense', amount: 30 },
    { type: 'income', amount: 300 },
  ]

  const [averageIncome, setAverageIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)

  const calculateTotals = () => {
    const Total = transactions.reduce(
      (acc, element) => {
        element.type == 'income'
          ? ((acc.income += element.amount), (acc.count += 1))
          : (acc.totalExpense += element.amount)

        return acc
      },
      {
        totalExpense: 0,
        income: 0,
        count: 0,
      }
    )
    setTotalExpense(Total.totalExpense)
    setAverageIncome((Total.income / Total.count).toFixed(2))
  }

  return (
    <div>
      <h1>Calculate Average Income and Total Expense</h1>
      <p>Transactions: {JSON.stringify(transactions)}</p>
      <p>Average Income: {averageIncome}</p>
      <p>Total Expense: {totalExpense}</p>
      <button onClick={calculateTotals}>Calculate Totals</button>
    </div>
  )
}

export default CalculateAverageAndTotalComponent
