import React from "react";
import { useState } from "react";

const UserMultipleInputs = () => {
    const [User, setUser] = useState({
        fname: "",
        lname: "",
        gmail: ""
    });

    const [AllUsers, setAllUsers] = useState([])
    const [isEdit, setIsEdit] = useState(false);
    const [index, setIndex] = useState(null)


    const handleChange = (e) => {
        const newUser = { ...User };
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }

    const AddUser = () => {
        const newAllUsers = [...AllUsers]
        newAllUsers.push(User)
        setAllUsers(newAllUsers);
        ClearForms();
    };

    const ClearForms = () => {
        setUser({
            fname: "",
            lname: "",
            gmail: ""
        })
    };

    const DeleteUser = (i) => {
        const newFilterUsers = AllUsers.filter((usr, index) => {
            return index !== i;
        });
        setAllUsers(newFilterUsers)
    };

    const handleEdit = (i) => {
        setIsEdit(true);
        setIndex(i);
        setUser(AllUsers[i])
    };

    const UpdateUser = () => {
        const newAllUsers = [...AllUsers];
        newAllUsers[index] = User;
        setAllUsers(newAllUsers)
        ClearForms();
        setIsEdit(false);
    }

    return (
        <div>
            <form>
                <label htmlFor="">First Name</label>
                <input type="text" name="fname" value={User.fname} onChange={handleChange} /><br />
                <label htmlFor="">Lname Name</label>
                <input type="text" name="lname" value={User.lname} onChange={handleChange} /><br />
                <label htmlFor="">Gmail</label>
                <input type="email" name="gmail" value={User.gmail} onChange={handleChange} /><br />
                <hr />
                {isEdit ?
                    (<button type="button" onClick={UpdateUser}>Update</button>) :
                    (<button type="button" onClick={AddUser}>AddUser</button>)
                }
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>gmail</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((usr, i) => {
                        return (
                            <tr key={i}>
                                <td>{usr.fname}</td>
                                <td>{usr.lname}</td>
                                <td>{usr.gmail}</td>
                                <td><button onClick={() => { handleEdit(i) }}>Edit</button></td>
                                <td><button onClick={() => { DeleteUser(i) }}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserMultipleInputs;

