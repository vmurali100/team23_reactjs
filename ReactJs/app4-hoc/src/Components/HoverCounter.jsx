import React from "react";
import {useState} from "react";

const HoverCounter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <button onMouseOver={handleIncrement}>Increment</button>
            <button onMouseOut={handleDecrement}>Decrement</button>
            <h2>You Have Cliked {count} times</h2>
        </div>
    );
}

export default HoverCounter