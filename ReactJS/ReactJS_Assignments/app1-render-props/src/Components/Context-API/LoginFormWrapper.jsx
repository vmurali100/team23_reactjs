import React, { useContext } from 'react';
import { validateLoginForm } from '../RP1/Validations';
import { FormProvider, FormContext } from './FormContext';

const LoginForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useContext(FormContext);

  return (
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
};

const LoginFormWrapper = () => (
  <FormProvider initialFormData={{ email: '', password: '' }} validate={validateLoginForm}>
    <LoginForm />
  </FormProvider>
);

export default LoginFormWrapper;
