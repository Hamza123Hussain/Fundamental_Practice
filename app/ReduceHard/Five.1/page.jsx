'use client'
import React, { useState } from 'react'

const VideoDurationComponent = () => {
  const videos = [
    { title: 'Video 1', duration: 10, category: 'Education' },
    { title: 'Video 2', duration: 20, category: 'Entertainment' },
    { title: 'Video 3', duration: 30, category: 'Education' },
    { title: 'Video 4', duration: 15, category: 'Entertainment' },
    { title: 'Video 5', duration: 25, category: 'Education' },
  ]

  const [totalDurationByCategory, setTotalDurationByCategory] = useState({})
  const [longestVideo, setLongestVideo] = useState(null)

  const calculateDurations = () => {
    const catorgory = videos.reduce(
      (acc, Element) => {
        if (acc.category[Element.category]) {
          acc.category[Element.category] += Element.duration
        } else {
          acc.category[Element.category] = Element.duration
        }

        if (acc.category[Element.category] > acc.highest.Time) {
          acc.highest = {
            Name: Element.category,
            Time: acc.category[Element.category],
          }
        }
        return acc
      },
      { category: {}, highest: { Name: '', Time: 0 } }
    )
    console.log(catorgory.category, catorgory.highest)
  }

  return (
    <div>
      <h1>Video Duration Analysis</h1>
      <p>Videos: {JSON.stringify(videos)}</p>
      <p>
        Total Duration by Category: {JSON.stringify(totalDurationByCategory)}
      </p>
      <p>
        Longest Video:{' '}
        {longestVideo
          ? `${longestVideo.title} - ${longestVideo.duration} minutes`
          : 'N/A'}
      </p>
      <button onClick={calculateDurations}>
        Calculate Durations and Find Longest Video
      </button>
    </div>
  )
}

export default VideoDurationComponent
