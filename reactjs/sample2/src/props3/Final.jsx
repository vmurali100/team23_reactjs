import React from 'react'
import { Parentconsumer } from './Components'

const Final = () => {
  return (
    <div id="final">
      <Parentconsumer>
         {(val)=>{
            return <ul>
                <li>{val.info}</li>
            </ul>
        
    }}
      </Parentconsumer>
    </div>
  )
}

export default Final
