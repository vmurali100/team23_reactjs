import { useState } from "react";

const useFormHandler = (initialFormData, validate) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (validate) {
      const newErrors = validate({ ...formData, [name]: value });
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate) {
      const newErrors = validate(formData);
      if (Object.keys(newErrors).length === 0) {
        console.log(formData);
      } else {
        setErrors(newErrors);
      }
    } else {
      console.log(formData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useFormHandler;
