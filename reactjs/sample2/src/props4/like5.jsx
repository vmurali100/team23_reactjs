import React from 'react'
import { likecomponent } from './likecomponent'

const Like5 = ({val}) => {
  return (
    <div id="like5">
        <likecomponent.Consumer>
            {(value)=>{
                return <ul>
                <li>"addition of numbers is:"{val.a1 + val.a2}</li>
            </ul>

            }}
            
            
       
        </likecomponent.Consumer>
      
    </div>
  )
}

export default Like5
