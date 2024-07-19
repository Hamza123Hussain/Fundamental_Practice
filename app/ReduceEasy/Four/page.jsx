'use client'
import React, { useState } from 'react'

const CountEvenNumbersComponent = () => {
  const numbers = [10, 15, 20, 25, 30, 35]
  const [evenCount, setEvenCount] = useState(0)

  const countEvenNumbers = () => {
    const count = numbers.reduce((acc, Element) => {
      if (Element % 2 === 0) {
        acc++
      }

      return acc
    }, 0)

    setEvenCount(count)
  }

  return (
    <div>
      <h1>Count Even Numbers</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Even Count: {evenCount}</p>
      <button onClick={countEvenNumbers}>Count Even Numbers</button>
    </div>
  )
}

export default CountEvenNumbersComponent
