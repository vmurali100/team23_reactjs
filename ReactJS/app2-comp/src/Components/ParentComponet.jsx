import React, { useState } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

const ParentComponet = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [index, setIndex] = useState(null);
  const [isValid, setIsValid] = useState(null);

  const validateForm = () => {
    let check = false;
    for (let a in user) {
      if (a !== "email") {
        if (user[a] === "") {
          check = true;
        }
      } else {
        var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (pattern.test(user[a]) == false) {
          check = true;
        }
      }
    }
    check ? setIsValid(false) : setIsValid(true);
  };
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
    validateForm();
  };
  const updateUser = () => {
    const newAllUsers = [...allUsers];
    newAllUsers[index] = user;
    setAllUsers(newAllUsers);
    clearForm();
    setIsEdit(false);
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
  const handleEdit = (i) => {
    setIsEdit(true);
    setIndex(i);
    setUser(allUsers[i]);
  };
  const deleteUser = (i) => {
    const newFilteredUsers = allUsers.filter((usr, index) => {
      return index !== i;
    });
    setAllUsers(newFilteredUsers);
  };
  return (
    <div>
      <FormComponent
        user={user}
        handleChange={handleChange}
        isEdit={isEdit}
        updateUser={updateUser}
        addUser={addUser}
        isValid={isValid}
        validateForm={validateForm}
      />
      <hr />
      <TableComponent
        allUsers={allUsers}
        handleEdit={handleEdit}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default ParentComponet;
