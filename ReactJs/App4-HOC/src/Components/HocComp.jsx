import React, { useState } from 'react';

const HOCComponent = (OurComponent) => {
    const NewComponent = () => {
        const [count, setcount] = useState(0);
        const handleIncrement = () => {
            setcount(count + 1)
        };
        const handleDecrement = () => {
            setcount(count - 1)
        };
        return (
            <OurComponent count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        )
    }
    return NewComponent
}

export default HOCComponent;