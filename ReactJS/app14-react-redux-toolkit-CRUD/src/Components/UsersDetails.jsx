import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, deleteUserAction, updateUserAction } from "../Store/UsersSlice";

const UsersDetails = () => {
  const { users } = useSelector((state) => state.users);
  const [user, setUser] = useState({ id: "", name: "", age: null, email: "" });
  const [index, setIndex] = useState(null);
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deleteUserAction({ index }));
  };
  const clearForm = () => {
    setUser({ id: "", name: "", age: "", email: "" });
  };

  const handleAddUser = () => {
    dispatch(addUserAction(user));
    clearForm();
  };

  const handleEdit = (usr, i) => {
    setUser(usr);
    setIndex(i);
  };

  const handleUpdateUser = () => {
    var newUserToUpdate={
        index,
        user
    }
    dispatch(updateUserAction(newUserToUpdate));
    clearForm();
    setIndex(null)
  };
  return (
    <div>
      <form>
        <label htmlFor="">ID</label>
        <input
          type="text"
          name="id"
          value={user.id}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Age</label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        {index === null ? (
          <button type="button" onClick={handleAddUser}>
            Add User
          </button>
        ) : (
          <button type="button" onClick={handleUpdateUser}>
            Update User
          </button>
        )}
      </form>
      <table border={1} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr, i) => (
            <tr key={i}>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.age}</td>
              <td>{usr.email}</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(usr, i);
                  }}
                >
                  Edit User
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(i);
                  }}
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersDetails;
