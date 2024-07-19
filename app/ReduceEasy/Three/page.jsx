'use client'
import React, { useState } from 'react'

const FindMinNumberComponent = () => {
  const numbers = [10, 20, 30, 5, 50]
  const [minNumber, setMinNumber] = useState(null)

  const findMinNumber = () => {
    const number = numbers.reduce((acumlator, Element) => {
      const min = Element
      if (min < acumlator) {
        acumlator = min
      }
      return acumlator
    }, 100)

    setMinNumber(number)
  }

  return (
    <div>
      <h1>Find Minimum Number</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Minimum Number: {minNumber}</p>
      <button onClick={findMinNumber}>Find Min Number</button>
    </div>
  )
}

export default FindMinNumberComponent
