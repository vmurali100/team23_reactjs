import React from 'react';
import FormHandler from './FormHandler';
import { validateLoginForm } from './Validations';

const LoginForm = () => (
  <FormHandler
    initialFormData={{ email: '', password: '' }}
    validate={validateLoginForm}
  >
    {({ formData, errors, handleChange, handleSubmit }) => (
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
    )}
  </FormHandler>
);

export default LoginForm;
