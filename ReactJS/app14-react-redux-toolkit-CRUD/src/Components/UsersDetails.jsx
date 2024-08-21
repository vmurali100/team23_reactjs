import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAction } from '../Store/UsersSlice';

const UsersDetails = () => {
    const {users} = useSelector((state)=>state.users);
    const dispatch = useDispatch()
    const handleDelete=(index)=>{
        dispatch(deleteUserAction({index}))
    }
    return (
    <div>
        <form>
        <label htmlFor="">ID</label>
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">Age</label>
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" /> <br />
            <label htmlFor="">ID</label>
            <input type="text" name="" id="" /> <br />
            
        </form>
      <table border={1} style={{width:'100%'}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>
                    Edit
                </th>
                <th>
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((usr,i)=> <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.age}</td>
                <td>{usr.email}</td>
                <td>
                    <button>Edit User</button>
                </td>
                <td>
                    <button onClick={()=>{handleDelete(i)}}>Delete User</button>
                </td>
            </tr> )}
        </tbody>
      </table>
    </div>
  )
}

export default UsersDetails
