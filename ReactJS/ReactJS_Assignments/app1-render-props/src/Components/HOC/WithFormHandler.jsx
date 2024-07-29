import React from "react";
import useFormHandler from "./useFormHandler";

const withFormHandler = (Component, initialFormData, validate) => {
  return (props) => {
    const formHandler = useFormHandler(initialFormData, validate);
    return <Component {...props} {...formHandler} />;
  };
};

export default withFormHandler;
