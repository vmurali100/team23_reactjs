import React from "react";

const OnInputmodified = ({count, handleClickCount}) => {
    return (
        <div>
            <input type="text" onChange={handleClickCount} placeholder="change filed" />
            <h2>You have changed data {count} times</h2>
        </div>
    )
}

export default OnInputmodified;