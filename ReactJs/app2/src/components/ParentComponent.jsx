import React, { useState } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

const ParentComponent = () => {
    const [User, setUser] = useState({
        fname: "",
        lname: "",
        gmail: ""
    });

    const handleChange = (e) => {
        const newUser = { ...User };
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
        ValidateFrom();
    };

    const UpdateUser = () => {
        const newAllUsers = [...AllUsers];
        newAllUsers[index] = User;
        setAllUsers(newAllUsers)
        ClearForms();
        setIsEdit(false);
    };

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

    const handleEdit = (i) => {
        setIsEdit(true);
        setIndex(i);
        setUser(AllUsers[i])
    };

    const DeleteUser = (i) => {
        const newFilterUsers = AllUsers.filter((usr, index) => {
            return index !== i;
        });
        setAllUsers(newFilterUsers)
    };

    const [isValid, setIsValid] = useState(null)

    const ValidateFrom = () => {
        let check = false;
        for (let a in User) {
            if (a !== "email") {
                if (User[a] === "") {
                    check = true
                }
            } else {
                var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (pattern.test(User[a]) == false) {
                    check = true;
                }

            }
        }
        check ? setIsValid(false) : setIsValid(true);
    }

    const [AllUsers, setAllUsers] = useState([])
    const [isEdit, setIsEdit] = useState(false); 
    const [index, setIndex] = useState(null)


    return (
        <div>
            <FormComponent User={User}
                handleChange={handleChange}
                isEdit={isEdit}
                UpdateUser={UpdateUser}
                AddUser={AddUser}
                AllUsers={AllUsers}
                ValidateFrom={ValidateFrom}
                isValid={isValid}
            />

            <hr />
            <TableComponent handleEdit={handleEdit}
                AllUsers={AllUsers}
                index={index}
                ClearForms={ClearForms}
                DeleteUser={DeleteUser}
            />
        </div>
    )
}

export default ParentComponent;