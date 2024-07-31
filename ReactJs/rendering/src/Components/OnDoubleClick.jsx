import React from "react";

const OnDoubleClick = ({count, handleClickCount}) => {
    return (
        <div>
            <button onDoubleClick={handleClickCount}>Increase No</button>
            <h2>You have Double clicked {count} times</h2>
        </div>
    )
}

export default OnDoubleClick; 