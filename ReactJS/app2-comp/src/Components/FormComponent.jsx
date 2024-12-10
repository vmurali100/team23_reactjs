import React from "react";

const FormComponent = ({ user, handleChange, isEdit, updateUser, addUser,isValid,validateForm }) => {
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
          onKeyUp={validateForm}
        />{" "}
        <br />
        <label htmlFor="">Last Name : </label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleChange}
          onKeyUp={validateForm}
        />{" "}
        <br />
        <label htmlFor="">Email : </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          onKeyUp={validateForm}
        />{" "}
        <br />
        {isEdit ? (
          <button type="button" onClick={updateUser}>
            Update User
          </button>
        ) : (
          <button type="button" onClick={addUser} disabled ={!isValid} >
            Add User
          </button>
        )}
      </form>
    </div>
  );
};

export default FormComponent;
