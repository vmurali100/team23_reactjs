import React, { useState, useEffect } from 'react';
import UserTable from './UsersTable';
import UserForm from './UsersForm';

const Users = () => {
    const [User, setUser] = useState({
        Fullname: "",
        Username: "",
        Gmail: "",
        PhoneNo: "",
        PassWord: "",
        ConfPassword: "",
        gender: "",
        termsAccepted: false, // Added termsAccepted field
    });

    const [allUsers, setAllUsers] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => { ReadUser(); }, []);

    const handleChange = (e) => {
        const newUser = { ...User };
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        newUser[e.target.name] = value;
        setUser(newUser);
    };

    const CreateUser = async () => {
        await fetch("http://localhost:3000/Formdata", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(User)
        });
        ClearForm();
        ReadUser();
    };

    const ReadUser = async () => {
        const response = await (await fetch("http://localhost:3000/Formdata")).json();
        setAllUsers(response);
    };

    const EditUser = (usr) => {
        setUser(usr);
        setIsEdit(true);
    };

    const UpdateUser = async () => {
        await fetch("http://localhost:3000/Formdata/" + User.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(User),
        });
        setIsEdit(false);
        ClearForm();
        ReadUser();
    };

    const DeleteUser = async (usr) => {
        await fetch("http://localhost:3000/Formdata/" + usr.id, {
            method: "DELETE"
        });
        ReadUser();
    };

    const ClearForm = () => {
        setUser({
            Fullname: "",
            Username: "",
            Gmail: "",
            PhoneNo: "",
            PassWord: "",
            ConfPassword: "",
            gender: "",
            termsAccepted: false, // Clear the termsAccepted field
        });
    };

    return (
        <div>
            <h2 className='text-center'>Welcome to user component</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <UserForm
                            User={User} 
                            handleChange={handleChange} 
                            CreateUser={CreateUser} 
                            isEdit={isEdit} 
                            UpdateUser={UpdateUser} 
                        />
                    </div>
                    <div className="col">
                        <UserTable
                            allUsers={allUsers} 
                            DeleteUser={DeleteUser} 
                            EditUser={EditUser} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
