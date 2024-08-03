import React from "react";
import { useState } from "react";
import HocComponent from "./HocComponent";

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h2>You Have Cliked {count} times</h2>
        </div>
    );
};

export default HocComponent(ClickCounter);