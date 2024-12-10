import React from 'react'
import { Stucomponent } from './get'

const End = ({ student }) => {
  return (

    <div id="end">
      <Stucomponent.Consumer>
        {(val) => {

          return <ul>
            
            <li>{val}</li>
            <li>{val}</li>
            <li>{val}</li>

          </ul>
        // return   <ul>
        //    {val.map((usr) => {
        //      return <li>{usr}</li>;
        //    })}
        //  </ul>

        }}
      </Stucomponent.Consumer>
    </div>
  )
}

export default End
