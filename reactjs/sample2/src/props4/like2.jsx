import React, { useState } from 'react'
import Like3 from './like3'
import { likecomponent } from './likecomponent'

const Like2 = () => {
    const [val,setval]=useState({
        a1:5,
        a2:5
    })
  return (
    <div>
        <likecomponent.Provider>
        <Like3 val={val}/>
        </likecomponent.Provider>
    
         
      
    </div>
  )
}

export default Like2
