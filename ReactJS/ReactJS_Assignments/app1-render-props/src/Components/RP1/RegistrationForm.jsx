import React from 'react';
import FormHandler from './FormHandler';
import { validateRegistrationForm } from './Validations';

const RegistrationForm = () => (
  <FormHandler
    initialFormData={{ username: '', email: '', password: '' }}
    validate={validateRegistrationForm}
  >
    {({ formData, errors, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span>{errors.username}</span>}
        </label>
        <br />
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
        <button type="submit">Register</button>
      </form>
    )}
  </FormHandler>
);

export default RegistrationForm;
