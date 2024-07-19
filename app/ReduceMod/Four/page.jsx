'use client'
import React, { useState } from 'react'

const LongestStringComponent = () => {
  const strings = ['apple', 'banana', 'strawberry', 'blueberryyyyyyyyy']
  const [longestString, setLongestString] = useState('')

  const findLongestString = () => {
    const long = strings.reduce((acc, element) => {
      console.log(element.length)
      return element.length > acc.length ? element : acc
    }, '')

    console.log(long)
    setLongestString(long)
  }

  return (
    <div>
      <h1>Longest String</h1>
      <p>Strings: {strings.join(', ')}</p>
      <p>Longest String: {longestString}</p>
      <button onClick={findLongestString}>Find Longest String</button>
    </div>
  )
}

export default LongestStringComponent
