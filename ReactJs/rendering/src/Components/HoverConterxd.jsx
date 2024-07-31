import React from "react";


const HoverCounterxd = ({count, handleClickCount}) => {
    return (
        <div>
            <button onMouseOver={handleClickCount}>Inscrease Count</button>

            <h2>You Clicked {count} times</h2>

        </div>
    )
}

export default HoverCounterxd;