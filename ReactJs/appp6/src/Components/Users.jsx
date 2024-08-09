import React from 'react'
import UserForm from './UserForm';
import UserTable from './UserTable';
import { useState } from 'react';
import { useEffect } from 'react'

const Users = () => {
    const [User, setUser] = useState({
        Fname: "",
        Lname: "",
        Gmail: ""
    });

    const [allUsers, setAllUsers] = useState([])

    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {ReadUser()}, [])

    const handleChange = (e) => {
        const newUser = { ...User };
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }

    const CreateUser = async () => { 
        const response = await fetch("http://localhost:3000/apidata", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(User)
        });
        ClearForm();
        ReadUser();
    }

    const ReadUser = async () => {
        const response = await (await fetch("http://localhost:3000/apidata")).json();
        setAllUsers(response)
    }


    const EditUser = (usr) => {
        setUser(usr)
        setIsEdit(true)
    }

    const UpdateUser = async () => {
        const response = await fetch("http://localhost:3000/apidata/" + User.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(User),
        });
        setIsEdit(false);
        ClearForm();
        ReadUser();
    };


    const DeleteUser = async (usr) => {
        const response = await fetch("http://localhost:3000/apidata/" + usr.id, {
            method: "DELETE"
        });
        ReadUser()
    }

    const ClearForm = () => {
        setUser({
            Fname: "",
            Lname: "",
            Gmail: ""
        });
    }

    return (
        <div>
            <h2 className='text-center'>Welcome to user component</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <UserForm User={User} handleChange={handleChange} CreateUser={CreateUser} isEdit={isEdit} UpdateUser={UpdateUser} />
                    </div>
                    <div className="col">
                        <UserTable allUsers={allUsers} DeleteUser={DeleteUser} EditUser={EditUser} />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Users;