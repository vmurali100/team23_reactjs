import React from 'react'
import Base from './base'

const Table5 = ({incrementval,decrementval,count}) => {
  return (
    <div>
        <h2> 5multiples</h2>
         <button onClick={incrementval}>click to get multiples of 5</button>
         <button onClick={decrementval}>click to decrease multiples of 5</button>
         <h2>  5  x {count} = {5 * count }</h2>

    </div>
  )
}

export default Base(Table5)
