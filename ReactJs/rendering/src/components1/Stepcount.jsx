import React from "react"; 

const StepCounter = ({count, handleIncrement, handleDecrement}) => {
    const step = 5;

    return (
        <div>
            <button onClick={() => handleIncrement(step)}>Increase Counnt by {step}</button>
            <button onClick={() => handleDecrement(step)}>Increase Counnt by {step}</button>
            <h2>Count : {count}</h2>
        </div>
    )
}

export default StepCounter;