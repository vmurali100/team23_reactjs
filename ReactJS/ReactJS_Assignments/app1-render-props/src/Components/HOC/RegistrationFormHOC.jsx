import React from "react";
import { validateRegistrationForm } from "../RP1/Validations";
import WithFormHandler from "./WithFormHandler";

const RegistrationFormHOC = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
}) => {
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default WithFormHandler(RegistrationFormHOC,{ username: '', email: '', password: '' }, validateRegistrationForm);
