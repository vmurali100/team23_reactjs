import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
    const storeDetails = useSelector((store)=>{
        return store.users
    })
    console.log(storeDetails)

  return (
    <div>
      <h2>Welcome to User Component </h2>

      <ul>
        {storeDetails.map((usr,i)=>{
            return <li key={i}>{usr}</li>
        })}
      </ul>
    </div>
  )
}

export default User
