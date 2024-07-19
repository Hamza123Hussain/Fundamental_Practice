'use client'
import React, { useState } from 'react'

const ConcatenateStringsComponent = () => {
  const words = ['Hello', 'world', 'this', 'is', 'React']
  const [concatenatedString, setConcatenatedString] = useState('')

  const concatenateStrings = () => {
    const data = words.reduce((accumlaotor, element) => {
      return accumlaotor.concat(element, ' ')
    }, '')

    setConcatenatedString(data)
  }

  return (
    <div>
      <h1>Concatenate Strings</h1>
      <p>Words: {words.join(', ')}</p>
      <p>Concatenated String: {concatenatedString}</p>
      <button onClick={concatenateStrings}>Concatenate Strings</button>
    </div>
  )
}

export default ConcatenateStringsComponent
