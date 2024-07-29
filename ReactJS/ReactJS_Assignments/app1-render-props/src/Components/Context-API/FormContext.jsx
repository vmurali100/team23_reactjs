import React, { createContext } from 'react';
import UseFormHandler from './UseFormHandler';

const FormContext = createContext();

const FormProvider = ({ children, initialFormData, validate }) => {
  const formHandler = UseFormHandler(initialFormData, validate);

  return (
    <FormContext.Provider value={formHandler}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
