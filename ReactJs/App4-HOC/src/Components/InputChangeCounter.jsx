import React from 'react';
import HOCComponent from './HocComp';

const InputChangeCounter = ({ handleIncrement, handleDecrement, count }) => {
    return (
        <div>
            <input type="text" onChange={handleIncrement} placeholder="Type to increment" />
            <input type="text" onChange={handleDecrement} placeholder="Type to decrement" />
            <h2>Input changed {count} times</h2>
        </div>
    )
}

export default HOCComponent(InputChangeCounter);
