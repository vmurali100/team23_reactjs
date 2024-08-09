import React from 'react'
import Middle from './middle'
import Simple1 from './Simple1'



const Main = () => {

  return (
    <div>
      <Middle render={(changecolor,color)=> <Simple1 color={color} changecolor={changecolor}/>}/>
    
    </div>
  )
}

export default Main
