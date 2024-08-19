import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, deleteUserAction, handleUpdateAction } from "../Store/actions";

const User = () => {
    const [username, setUserName] = useState("");
    const [index, setIndex] = useState(null);
    const dispacth = useDispatch()
    const UserDetails = useSelector((state) => {
        return state.users
    });
    const handleDelete = (usr) => {
        dispacth(deleteUserAction(usr));
    };

    const handleEdit = (usr, i) => {
        setUserName(usr);
        setIndex(i)
    };
    return (
        <div>
            <h2>Welcome to User Component..!!</h2>
            <form>
                <label htmlFor="">User Name :</label>
                <input type="text" name="" value={username} onChange={(e) => { setUserName(e.target.value) }} /> <br /> <br />
                {index === null ? <button
                    onClick={() => {
                        dispacth(addUserAction(username));
                        setUserName("")
                    }}
                    type="button"
                >
                    Add User
                </button> : <button
                    onClick={() => {
                        dispacth(handleUpdateAction({ username, index }));
                        setIndex(null);
                        setUserName("")
                    }} 
                    type="button"
                >
                    UpDate User
                </button>}
            </form>
            <ul>
                {UserDetails.map((usr, i) => {
                    return (<li key={i} onClick={() => {
                        handleEdit(usr, i);
                    }} > {usr}
                        < span style={{ width: 20, height: 20, background: "red", display: "inline-block", borderRadius: "30%", color: "whitesmoke" }} onClick={() => { handleDelete(usr); }} >X</span>
                    </li>
                    )
                })}
            </ul >
        </div >
    )
}

export default User