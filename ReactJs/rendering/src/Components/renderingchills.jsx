import React from 'react';


const RenderChild = ({message, createNewComp}) => {
    return (
        <div>
            <h2>Welcome to renderchild component</h2>
            <p>The message received from main is : {message}</p>

            {createNewComp()}
        </div>
        
    )
}

export default RenderChild;