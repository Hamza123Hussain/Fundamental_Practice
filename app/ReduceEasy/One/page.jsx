'use client'
import React, { useState } from 'react'

const SumNumbersComponent = () => {
  const numbers = [10, 20, 30, 40, 50]
  const [sum, setSum] = useState(0)

  const calculateSum = () => {
    const data = numbers.reduce((accumlator, element) => {
      return accumlator + element
    }, 0)

    setSum(data)
  }

  return (
    <div>
      <h1>Sum of Numbers</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Sum: {sum}</p>
      <button onClick={calculateSum}>Calculate Sum</button>
    </div>
  )
}

export default SumNumbersComponent
