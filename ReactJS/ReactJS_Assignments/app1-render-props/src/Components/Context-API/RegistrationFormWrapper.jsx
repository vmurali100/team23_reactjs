import React, { useContext } from 'react';
import { validateRegistrationForm } from '../RP1/Validations';
import { FormProvider, FormContext } from './FormContext';

const RegistrationForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useContext(FormContext);

  return (
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
  );
};

const RegistrationFormWrapper = () => (
  <FormProvider initialFormData={{ username: '', email: '', password: '' }} validate={validateRegistrationForm}>
    <RegistrationForm />
  </FormProvider>
);

export default RegistrationFormWrapper;
