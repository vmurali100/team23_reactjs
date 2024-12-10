import React from 'react'

const Forms = ({user,handlecange,isedit,adduser,updateuser}) => {
    
  return (
    <div>
          <form >
            <label >Name</label>
            <input type="text" name="fname" value={user.fname} onChange={handlecange} /><br />
            <label >lName</label>
            <input type="text" name="lname" value={user.lname} onChange={handlecange} /><br />
            <label >email</label>
            <input type="email" name="email" value={user.email} onChange={handlecange} /><br />
             {isedit ? <button type="button" onClick={updateuser}>updateuser</button> : <button  type="button" onClick={adduser}>adduser</button>}
        </form>
      
    </div>
  )
}

export default Forms
