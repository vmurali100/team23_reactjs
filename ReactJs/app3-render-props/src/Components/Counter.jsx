import React from "react";
import { useState } from "react";

const Counter = ({render}) => {
    const [count,setCount] = useState(0)
    return (
        <div>
            {render(count,setCount)}
        </div>
    )
}

export default Counter