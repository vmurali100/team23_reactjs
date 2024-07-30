import React from "react";
import { useState } from "react";

const ClickCounter = () => {
    const [count,setCount] = useState(0);
    const handleClickCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <button onClick={handleClickCount}>Increment Count</button>

            <h2>You Clicked {count} times</h2>
        </div>
    );
}

export default ClickCounter;