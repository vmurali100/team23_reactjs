import React from 'react';


const ClickCounter = ({count, handleClickCount}) => {
    return (
        <div>
            <button onClick={handleClickCount}>Inscrease Count</button>

            <h2>You Clicked {count} times</h2>

        </div>
    )
}

export default ClickCounter;