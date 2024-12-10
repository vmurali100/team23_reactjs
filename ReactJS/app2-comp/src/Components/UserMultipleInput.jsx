import React from "react";
import { useState } from "react";

const UserMultipleInput = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [index,setIndex] = useState(null)
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const addUser = () => {
    const newAllUsers = [...allUsers];
    newAllUsers.push(user);
    setAllUsers(newAllUsers);
    clearForm();
  };
  const clearForm = () => {
    setUser({
      fname: "",
      lname: "",
      email: "",
    });
  };

  const deleteUser = (i) => {
    const newFilteredUsers = allUsers.filter((usr, index) => {
      return index !== i;
    });
    setAllUsers(newFilteredUsers);
  };

  const handleEdit=(i)=>{
    setIsEdit(true);
    setIndex(i);
    setUser(allUsers[i])
  }
  const updateUser=()=>{
    const newAllUsers = [...allUsers];
    newAllUsers[index] = user;
    setAllUsers(newAllUsers);
    clearForm();
    setIsEdit(false);
  }
  return (
    <div>
      <form>
        <label htmlFor="">First Name : </label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Last Name : </label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Email : </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        {isEdit ? (
          <button type="button" onClick={updateUser}>
            Update User
          </button>
        ) : (
          <button type="button" onClick={addUser}>
            Add User
          </button>
        )}
      </form>

      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.email}</td>
                <td>
                  <button onClick={()=>{handleEdit(i)}}>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(i);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserMultipleInput;
