import React from "react";

const FormComponent = ({ user, handleChange, isEdit, updateUser, addUser }) => {
  return (
    <div>
      <h2>Welcome to Form Component !!</h2>

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
    </div>
  );
};

export default FormComponent;
