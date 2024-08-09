import React from "react";
import { useState } from "react";

const AddValueForm = () => {
  const [users, setUsers] = useState([
    { fname: "Ram" },
    { fname: "Ravi" },
    { fname: "Sam" },
    { fname: "Sundar" },
  ]);
  const [userFname, setUserFname] = useState({
    fname: "",
  });
  const handleChange = (e) => {
    const newUser = { ...userFname };
    newUser.fname = e.target.value;
    setUserFname(newUser);
  };
  const addUsers=()=>{
    const newUsers = [...users]
    newUsers.push(userFname);
    setUsers(newUsers)
    setUserFname({
        fname:""
    })
  }
  const editUser=(usr)=>{
    setUserFname(usr)
  }
  return (
    <div>
      <form>
        <label htmlFor="">First Name :</label>
        <input
          type="text"
          name=""
          value={userFname.fname}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="button" onClick={addUsers}>Add Value</button>
      </form>

      <hr />
      <ul>
        {users.map((usr,i)=>{
            return <li key={i} onClick={()=>{editUser(usr)}}>{usr.fname} </li>
        })}
      </ul>
    </div>
  );
};

export default AddValueForm;
