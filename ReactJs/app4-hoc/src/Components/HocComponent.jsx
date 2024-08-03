import React, { useState } from "react";

const HocComponent = (OurComponent) => {

    const NewComponent = () => {
        const [count, setCount] = useState(0);
        const handleIncrement = () => {
            setCount(count + 1);
        };
        const handleDecrement = () => {
            setCount(count - 1);
        };
        return <OurComponent handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={count} />;
    };
    return NewComponent
};

export default HocComponent