'use client'
import React, { useState } from 'react'

const AverageRatingComponent = () => {
  const ratings = [
    { user: 'Alice', rating: 4 },
    { user: 'Bob', rating: 5 },
    { user: 'Charlie', rating: 3 },
  ]
  const [averageRating, setAverageRating] = useState(0)

  const calculateAverageRating = () => {
    const avg = ratings.reduce((acc, element) => {
      return parseInt(acc + element.rating)
    }, 0)
    console.log(avg)
    setAverageRating(avg / ratings.length)
  }

  return (
    <div>
      <h1>Average Rating</h1>
      <p>Ratings: {JSON.stringify(ratings)}</p>
      <p>Average Rating: {averageRating}</p>
      <button onClick={calculateAverageRating}>Calculate Average Rating</button>
    </div>
  )
}

export default AverageRatingComponent
