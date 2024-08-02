import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UsersForm from "./UsersForm";
import UsersTable from "./UsersTable";

const Users = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    readUser();
  }, []);
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const createUser = async () => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    clearForm();
    readUser();
  };
  const readUser = async () => {
    const response = await (await fetch("http://localhost:3000/users")).json();
    setAllUsers(response);
  };
  const editUser = (usr) => {
    console.log(usr);
    setUser(usr);
    setIsEdit(true);
  };
  const updateUser = async () => {
    const response = await fetch("http://localhost:3000/users/" + user.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsEdit(false);
    clearForm();
    readUser();
  };
  const deleteUser = async (usr) => {
    console.log(usr);
    const response = await fetch("http://localhost:3000/users/" + usr.id, {
      method: "DELETE",
    });
    readUser();
  };

  const clearForm = () => {
    setUser({
      fname: "",
      lname: "",
      email: "",
    });
  };
  return (
    <div>
      <h2 className="text-center">Welcome to Users Component !!</h2>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <UsersForm
              user={user}
              handleChange={handleChange}
              createUser={createUser}
              isEdit={isEdit}
              updateUser={updateUser}

            />
          </div>
          <div className="col">
            <UsersTable
              allUsers={allUsers}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
