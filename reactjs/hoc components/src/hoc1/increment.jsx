import React from 'react'
import Combine from './combine'

const Increment = ({incrementval, decrementval,count}) => {
  return (
    <div>
        <button onClick={incrementval}>click to increse</button>
        <button onClick={decrementval}>click to decrease</button>
        <h2>you ave clicked {count} times</h2>
      
    </div>
  )
}

export default Combine(Increment)
