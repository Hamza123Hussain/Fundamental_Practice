// 'use client'
// import React, { useState } from 'react'

// const FindFirstOddNumberComponent = () => {
//   const numbers = [12, 24, 7, 36, 50, 9]
//   const [firstOdd, setFirstOdd] = useState(null)

//   const findFirstOdd = () => {
//     const oddnumber = numbers.reduce((acc, Element) => {
//       if (acc !== null) {
//         return acc
//       }
//       return Element % 2 !== 0 ? Element : acc
//     }, null)

//     setFirstOdd(oddnumber)
//   }

//   return (
//     <div>
//       <h1>Find First Odd Number</h1>
//       <p>Numbers: {numbers.join(', ')}</p>
//       <p>First Odd Number: {firstOdd}</p>
//       <button onClick={findFirstOdd}>Find First Odd Number</button>
//     </div>
//   )
// }

// export default FindFirstOddNumberComponent

'use client'
import React, { useState } from 'react'

const FindFirstGreaterThanFiftyComponent = () => {
  const numbers = [12, 45, 67, 23, 55, 89]
  const [firstGreaterThanFifty, setFirstGreaterThanFifty] = useState(null)

  const findFirstGreaterThanFifty = () => {
    const g50 = numbers.reduce((acc, Element) => {
      if (acc !== null) {
        return acc
      }
      return Element > 50 ? Element : acc
    }, null)

    setFirstGreaterThanFifty(g50)
  }

  return (
    <div>
      <h1>Find First Number Greater Than 50</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>First Number Greater Than 50: {firstGreaterThanFifty}</p>
      <button onClick={findFirstGreaterThanFifty}>
        Find First Number Greater Than 50
      </button>
    </div>
  )
}

export default FindFirstGreaterThanFiftyComponent
