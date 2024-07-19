'use client'
import React, { useState } from 'react'

const FlattenArrayComponent = () => {
  const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6],
  ]
  const [flattenedArray, setFlattenedArray] = useState([])

  const flattenArray = () => {
    const newarray = nestedArray.reduce((acc, Element) => {
      return acc.concat(Element)
    }, [])

    setFlattenedArray(newarray)
  }

  return (
    <div>
      <h1>Flatten Array</h1>
      <p>Nested Array: {JSON.stringify(nestedArray)}</p>
      <p>Flattened Array: {flattenedArray.join(', ')}</p>
      <button onClick={flattenArray}>Flatten Array</button>
    </div>
  )
}

export default FlattenArrayComponent
