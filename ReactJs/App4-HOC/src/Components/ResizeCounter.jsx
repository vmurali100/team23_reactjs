import React, { useEffect } from 'react';
import HOCComponent from './HocComp';

const ResizeCounter = ({ handleIncrement, handleDecrement, count }) => {
    useEffect(() => {
        window.addEventListener('resize', handleIncrement);
        return () => {
            window.removeEventListener('resize', handleIncrement);
        }
    }, [handleIncrement]);

    return (
        <div>
            <button onClick={handleDecrement}>Reset Count</button>
            <h2>Window resized {count} times</h2>
        </div>
    )
}

export default HOCComponent(ResizeCounter);
