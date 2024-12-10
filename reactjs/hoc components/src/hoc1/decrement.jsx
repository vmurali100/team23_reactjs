import React from 'react'
import Combine from './combine'

const Decrement = ({incrementval, decrementval,count}) => {
  return (
    <div>
        <button onMouseOver={incrementval}> hover to increase</button>
        <button onMouseOver={decrementval}> hover to decrease</button>
        <h2> you have overd mouse {count} times</h2>
      
    </div>
  )
}

export default Combine(Decrement)
