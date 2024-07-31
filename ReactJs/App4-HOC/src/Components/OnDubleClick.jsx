import React from 'react';
import HOCComponent from './HocComp';

const DoubleClickCounter = ({ handleIncrement, handleDecrement, count }) => {
    return (
        <div>
            <button onDoubleClick={handleIncrement}>Double Increment</button>
            <button onDoubleClick={handleDecrement}>Double Decrement</button>
            <h2>You have Clicked {count} times</h2>
        </div>
    );
}

export default HOCComponent(DoubleClickCounter);
