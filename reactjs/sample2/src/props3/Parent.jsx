import React, { useState } from 'react'
import { Parentcomponent, Parentprovider } from './Components'
import Child from './Child'


const Parent = () => {
    const [text,settext]=useState({
        info:"props3",
    })
  return (
    <div id="parent">
        <Parentprovider value={text}>
           <Child/>
        </Parentprovider>
    
      
    </div>
  )
}

export default Parent
