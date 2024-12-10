
import React from 'react'

const RenderChild = ({message,createNewComp}) => {
  return (
    <div>
      <h2>Welcome To Render Child !!!</h2>
      <p>Message Received From Parent is : {message}</p>

      {createNewComp()}
    </div>
  )
}

export default RenderChild