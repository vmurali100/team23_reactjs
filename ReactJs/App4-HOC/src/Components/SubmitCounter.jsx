import React from 'react';
import HOCComponent from './HocComp';

const SubmitCounter = ({ handleIncrement, handleDecrement, count }) => {
    const handleSubmitIncrement = (e) => {
        e.preventDefault();
        handleIncrement();
    }
    const handleSubmitDecrement = (e) => {
        e.preventDefault();
        handleDecrement();
    }
    return (
        <div>
            <form onSubmit={handleSubmitIncrement}>
                <button type="submit">Increment</button>
            </form>
            <form onSubmit={handleSubmitDecrement}>
                <button type="submit">Decrement</button>
            </form>
            <h2>Form submitted {count} times</h2>
        </div>
    )
}

export default HOCComponent(SubmitCounter);
