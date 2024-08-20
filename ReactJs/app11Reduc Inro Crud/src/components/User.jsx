import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { adduserAction, deleteUserAction, userUpdateAction } from './Actions';

const User = () => {
    const [userName, setUserName] = useState("")
    const [index, setIndex] = useState(null)
    const dispatch = useDispatch()
    const userDetailes = useSelector((state) => {
        return state.users
    });
    const handleDeleteUser = (usr) => {
        dispatch(deleteUserAction(usr))
    }

    const handleEdite = (usr, i) => {
        setUserName(usr);
        setIndex(i)
    }
    return (
        <div>
            <h2>Welcome to user component !!!</h2>
            <form>
                <label htmlFor="">User Name</label>
                <input type="text" name='username' value={userName} onChange={(e) => { setUserName(e.target.value) }} /> <br />
                <br />
                {index === null ? <button onClick={() => { dispatch(adduserAction(userName)) }} type='button'>Add User</button> : <button onClick={() => { dispatch(userUpdateAction({userName, index})); setIndex(null); setUserName("")}} type='button'>Update User</button>}
            </form>
            <ul>
                {userDetailes.map((usr, i) => {
                    return <li key={i} onClick={() => { handleEdite(usr, i) }}>{usr} <span style={{ width: 30, height: 30, background: "red", display: "inline-block", borderRadius: '50%', color: 'white' }} onClick={() => { handleDeleteUser(usr) }}  >X</span></li>
                })}
            </ul>
        </div>
    )
}

export default User;