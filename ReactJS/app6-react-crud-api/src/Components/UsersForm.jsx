import React from "react";

const UsersForm = ({ user, handleChange, createUser, isEdit, updateUser }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.fname}
            name="fname"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.lname}
            name="lname"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        {isEdit ? (
          <button type="button" className="btn btn-primary" onClick={updateUser}>
            Update
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={createUser}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default UsersForm;
