import React from "react";
import {useState} from "react";

const HoverCounter = () => {
    const [count,setCount] = useState(0);
    const handleClickCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <button onMouseOver={handleClickCount}>Increment Count</button>

            <h2>You Hovered {count} times</h2>
        </div>
    );
}

export default HoverCounter