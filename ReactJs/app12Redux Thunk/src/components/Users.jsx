import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addUserAction,
    deleteUserAction,
    getAllUsersAction,
    handleUpdateAction,
} from "../Store/action";  

const User = () => {
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [isEdit, setIsEdit] = useState(false);
    const storeDetails = useSelector((store) => store.users);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllUsersAction());
    }, [dispatch]);

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    };

    const addUser = () => {
        dispatch(addUserAction(userInfo));
        clearForm();
    };

    const clearForm = () => {
        setUserInfo({
            fullName: "",
            email: "",
            password: "",
        });
    };

    const handleDelete = (usr) => {
        dispatch(deleteUserAction(usr));
    };

    const handleEdit = (usr) => {
        setUserInfo(usr);
        setIsEdit(true);
    };

    const handleUpdate = () => {
        dispatch(handleUpdateAction(userInfo));
        clearForm();
        setIsEdit(false);
    };

    return (
        <div>
            <h2>Welcome to User Component</h2>
            <ul>
                {storeDetails.map((usr, i) => (
                    <li key={i}>
                        <span onClick={() => handleEdit(usr)}>
                            {usr.fullName}
                        </span>
                        <span
                            style={{
                                color: "white",
                                background: "red",
                                cursor: "pointer",
                                margin: "10px",
                                display: "inline-block",
                                padding: "10px",
                            }}
                            onClick={() => handleDelete(usr)}
                        >
                            X
                        </span>
                    </li>
                ))}
            </ul>

            <form>
                <label>Full Name: </label>
                <input
                    type="text"
                    value={userInfo.fullName}
                    name="fullName"
                    onChange={handleChange}
                />
                <br />
                <label>Email: </label>
                <input
                    type="text"
                    value={userInfo.email}
                    name="email"
                    onChange={handleChange}
                />
                <br />
                <label>Password: </label>
                <input
                    type="text"
                    value={userInfo.password}
                    name="password"
                    onChange={handleChange}
                />
                <br />
                {isEdit ? (
                    <button type="button" onClick={handleUpdate}>
                        Update User
                    </button>
                ) : (
                    <button type="button" onClick={addUser}>
                        Add User
                    </button>
                )}
            </form>
        </div>
    );
};

export default User;
