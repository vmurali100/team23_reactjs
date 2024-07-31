import React from 'react';
import HOCComponent from './HocComp';

const FocusCounter = ({ handleIncrement, handleDecrement, count }) => {
    return (
        <div>
            <input onFocus={handleIncrement} onBlur={handleDecrement} placeholder="Focus to increment, Blur to decrement" />
            <h2>You have Focused {count} times</h2>
        </div>
    )
}

export default HOCComponent(FocusCounter);
