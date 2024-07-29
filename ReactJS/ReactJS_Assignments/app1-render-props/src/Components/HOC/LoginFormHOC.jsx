import React from 'react';
import { validateLoginForm } from '../RP1/Validations';
import withFormHandler from './WithFormHandler';

const LoginFormHOC = ({ formData, errors, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Email:
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
    </label>
    <br />
    <label>
      Password:
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      {errors.password && <span>{errors.password}</span>}
    </label>
    <br />
    <button type="submit">Login</button>
  </form>
);

export default withFormHandler(LoginFormHOC, { email: '', password: '' }, validateLoginForm);
