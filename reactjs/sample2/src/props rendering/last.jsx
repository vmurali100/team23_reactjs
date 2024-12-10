import React from 'react'
import { Userinfo } from './usercomponent'

const Last = ({ value }) => {
    return (
        <div id="last">
          

            <Userinfo.Consumer>
                {(val) => {
                    return <ul>
                    <li>{val.fanme}</li>
                    <li>{val.lname}</li>
                   </ul>

                }}

            </Userinfo.Consumer>


        </div>
    )
}

export default Last