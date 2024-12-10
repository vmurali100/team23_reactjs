import React from 'react'
import Base from './base'

const Table3 = ({incrementval,decrementval,count}) => {
  return (
    <div>
        <h2> 3 multiples</h2>
         <button onClick={incrementval}>click to get multiples of 3</button>
         <button onClick={decrementval}>click to decrease multiples of 3</button>
         <h2>  3 x {count} = {3 * count }</h2>

    </div>
  )
}

export default Base(Table3)
