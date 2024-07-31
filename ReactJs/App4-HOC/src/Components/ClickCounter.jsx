import React from "react";
import HOCComponent from "./HocComp";



const ClicCounter = ({ handleIncrement, handleDecrement, count }) => {
    return (
        <div>
            <button onClick={handleIncrement}>Increament</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h2>You have Clicked {count} times</h2>
        </div>
    )
}

export default HOCComponent(ClicCounter)