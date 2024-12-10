import React, { useState } from 'react'
import Base from './base'

const Base1 = ({changecolor,color,incrementval, decrementval,count}) => {
   

  return (
    <div>
      
      
      
        <button onClick={changecolor}>click to change color </button>
        <h2>{color}</h2>
    </div>
  )
}

export default Base(Base1)
