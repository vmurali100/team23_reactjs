import React from "react";
import { Table } from "./Table";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Form = ({ formData }) => {
  console.log(formData);
  return (
    <div>
      <form>
        {formData.map((field) => {
          if (field.type === "text" || field.type === "dropdown") {
            return (
              <div key={field.id}>
                <label>{field.label}</label>
                {field.type === "text" ? (
                  <input type="text" placeholder={field.placeholder} />
                ) : (
                  <select>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            );
          } 
          else if (field.type === "table") {
            return (
              <div key={field.id}>
                <label>{field.label}</label>
                <DndProvider backend={HTML5Backend}>
                  <Table columns={field.columns} data={field.data} />
                </DndProvider>
              </div>
            );
          } 
          else {
            return null;
          }
        })}
      </form>
    </div>
  );
};

export default Form;
