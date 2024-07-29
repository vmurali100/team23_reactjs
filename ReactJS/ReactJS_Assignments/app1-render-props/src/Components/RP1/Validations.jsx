export const validateRegistrationForm = (formData) => {
  const errors = {};
  if (!formData.username) errors.username = "Username is required";
  if (!formData.email) errors.email = "Email is required";
  if (!formData.password) errors.password = "Password is required";
  return errors;
};

export const validateLoginForm = (formData) => {
  const errors = {};
  if (!formData.email) errors.email = "Email is required";
  if (!formData.password) errors.password = "Password is required";
  return errors;
};
