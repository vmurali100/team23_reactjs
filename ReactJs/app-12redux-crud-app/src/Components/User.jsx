import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addUserAction, deleteUserAction } from "../Store/actions";

const User = () => {
    const [username,setUserName]=useState("")
    const dispacth = useDispatch()
    const UserDetails = useSelector((state) => {
        return state.users
    });
    const handleDelete = (usr) => {
        dispacth(deleteUserAction(usr))
    }
    return (
        <div>
            <h2>Welcome to User Component..!!</h2>
            <form>
                <label htmlFor="">User Name :</label>
                <input type="text" name="" value={username} onChange={(e)=>{setUserName(e.target.value)}}/> <br /> <br />
                <button onClick={()=>{addUserAction(username)}} type="button">Add User</button>
            </form>
            <ul>
                {UserDetails.map((usr, i) => {
                    return <li key={i} onClick={() => { handleDelete(usr) }}>{usr}</li>
                })}
            </ul>
        </div>
    )
}

export default User