import React from "react";
import { useState } from "react";
import "./AddValue.css";
const RemoveValue = () => {
  const [listItems, setListItems] = useState([
    "Item1",
    "Item2",
    "item3",
    "Item4",
  ]);

  const handleRemoveList = () => {
    const newListItems = [...listItems];
    newListItems.pop();
    setListItems(newListItems);
  };
  return (
    <div>
      <button onClick={handleRemoveList}>Remove A List</button>
      <ul>
        {listItems.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default RemoveValue;
