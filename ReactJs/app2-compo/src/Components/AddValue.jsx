import React, { useState } from "react";
import "./AddValue.css"
const AddValue = () => {
    const [listitems, setListItems] = useState([
        "Item1",
        "Item2",
        "Item3",
        "Item4",
        "Item5"
    ]);
    const handleAddList = () => {
        const newListItems = [...listitems];
        newListItems.push("Item" + (Number(listitems.length) + 1));
        setListItems(newListItems);
    };

    const handleRemoveList = () => {
        const newRemoveListitems = [...listitems];
        newRemoveListitems.pop();
        setListItems(newRemoveListitems);

    }

    return (
        <div>
            <button id="Add" onClick={handleAddList}>Add A List</button>
            <button id="Remove" onClick={handleRemoveList}>Remove A List</button>
            <ul>
                {listitems.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default AddValue