import React from "react";
import { useState } from "react";
import "./AddValue.css";
const AddValue = () => {
  const [listItems, setListItems] = useState([
    "Item1",
    "Item2",
    "item3",
    "Item4",
  ]);

  const handleAddList = () => {
    // listItems.push("Item5")
    // 1. Create a Copy of Exisiting State
    // 2. Do the required changes , (ADD, DELETE, UPDATE)
    // 3. Update the State
    const newListItems = [...listItems]; // Creates a Copy of listItems
    newListItems.push("Item" + (Number(listItems.length) + 1)); //Added new Value to the listItems
    setListItems(newListItems);
  };
  return (
    <div>
      <button onClick={handleAddList}>ADD A List</button>
      <ul>
        {listItems.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default AddValue;
