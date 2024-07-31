import React from 'react';
import HOCComponent from './HocComp';



const HoverCounter = ({ handleDecrement, handleIncrement, count }) => {
    return (
        <div>
            <button onMouseOver={handleIncrement}>Increament</button>
            <button onMouseOut={handleDecrement}>Decrement</button>
            <h2>You have Clicked {count} times</h2>
        </div>
    )
}

export default HOCComponent(HoverCounter);