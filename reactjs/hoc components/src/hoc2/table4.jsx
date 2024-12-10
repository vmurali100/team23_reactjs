import React from 'react'
import Base from './base'

const Table4 = ({incrementval,decrementval,count}) => {
  return (
    <div>
        <h2> 4 multiples</h2>
         <button onClick={incrementval}>click to get multiples of 4</button>
         <button onClick={decrementval}>click to decrease multiples of 4</button>
         <h2>  4 x {count} = {4 * count }</h2>

    </div>
  )
}

export default Base(Table4)
