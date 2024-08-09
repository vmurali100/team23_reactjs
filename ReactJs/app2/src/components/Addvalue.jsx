import React from 'react';
import { useState } from 'react'
import './Addvalue.css'


const AddValue = () => {
    const [listiems, setlistitems] = useState([
        "Item1",
        "Item2",
        "Item3",
        "Item4",
        "Item5",
    ]);

    const handleAddList = () => {
    const Newlist = [...listiems]
    Newlist.push("item" + Number(listiems.length+1))
    setlistitems(Newlist)
    }

    return (
        <div>
            <ul>
                <button onClick={handleAddList}>Add a list</button>
                {listiems.map((val, i) => {
                    return <li key={i}>{val}</li>
                })}
            </ul>
        </div>
    )
}

export default AddValue;