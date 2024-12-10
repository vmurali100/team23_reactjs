import React from 'react'
import Base from './base'

const Base2 = ({changecolor,color,incrementval,decrementval,count}) => {
  return (
    <div>
         <button onClick={incrementval}>click to get squares of number</button>
         <button onClick={decrementval}>click to decrease</button>
         <h2> squares of {count} x {count} = {count*count }</h2>

         
      
    </div>
  )
}

export default Base(Base2)
