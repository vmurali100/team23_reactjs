import React, { useState } from "react";


const Counter1 = ({ render }) => {
    const [count, setCount] = useState(0)

    const handleIncrement = (step) => {
        setCount(count + step);
    };

    const handleDecrement = (step) => {
        setCount(count - step)
    };

    return (
        <div>
            {render(count, handleIncrement, handleDecrement)}

        </div>
    )
}

export default Counter1;