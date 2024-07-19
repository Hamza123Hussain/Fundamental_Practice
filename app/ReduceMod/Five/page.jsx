'use client'
import React, { useState } from 'react'

const UniqueElementsComponent = () => {
  const numbers = [1, 2, 2, 3, 4, 4, 5]
  const [uniqueElements, setUniqueElements] = useState([])

  const findUniqueElements = () => {
    const UniqueElement = numbers.reduce((acc, Element) => {
      if (!acc.includes(Element)) {
        acc.push(Element)
      }
      return acc
    }, [])
    setUniqueElements(UniqueElement)
  }

  return (
    <div>
      <h1>Find Unique Elements</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Unique Elements: {uniqueElements.join(', ')}</p>
      <button onClick={findUniqueElements}>Find Unique Elements</button>
    </div>
  )
}

export default UniqueElementsComponent
