import React from "react";

const OnInputChange = ({count, handleClickCount}) => {
    return(
        <div>
            <input type="text" onInputCapture={handleClickCount} placeholder="Type to increment" />
            <h2>Input changed {count} times</h2>
        </div>
    )
}

export default OnInputChange;