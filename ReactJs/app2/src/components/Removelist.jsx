import React from 'react';
import { useState } from 'react'
import './Addvalue.css'


const RemoveValue = () => {
    const [listiems, setlistitems] = useState([
        "Item1",
        "Item2",
        "Item3",
        "Item4",
        "Item5",
    ]);

    const handleRemoveList = () => {
    const Newlist = [...listiems]
    Newlist.pop();
    setlistitems(Newlist)
    }

    return (
        <div>
            <ul>
                <button onClick={handleRemoveList}>Remove a list</button>
                {listiems.map((val, i) => {
                    return <li key={i}>{val}</li>
                })}
            </ul>
        </div>
    )
}

export default RemoveValue;