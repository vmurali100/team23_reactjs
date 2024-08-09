import React, { useState } from "react";

const AddValueForm = () => {
    const [Users, setUsers] = useState([
        { fname: "Ram" },
        { fname: "Ravi" },
        { fname: "Sam" },
        { fname: "Sunder" }
    ]);

    const [UserFname, setUserFanme] = useState({
        fname: "",
    });

    const handleChange = (e) => {
        const newUser = { ...UserFname }
        newUser.fname = e.target.value
        setUserFanme(newUser);
    };

    const AddUser = () => {
        const newUsers = [ ...Users ]
        newUsers.push(UserFname);
        setUsers(newUsers);
        setUserFanme({
            fname: ""
        });
    }

    const editUser = (usr) => {
        setUserFanme(usr)
    }

    return (
        <div>
            <form>
                <label htmlFor="">First Name</label>
                <input type="text" value={UserFname.fname} onChange={handleChange} />
                <button type="button" onClick={AddUser}>Add Value</button>
            </form>
            <hr />
            <ul>
                {Users.map((usr, i) => {
                    return <li key={i} onClick={() => {editUser(usr)}}>{usr.fname}</li>
                })}
            </ul>
        </div>
    )
}

export default AddValueForm;