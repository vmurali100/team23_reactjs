import React from "react";

const RenderChild = ({message,createNewComp}) =>{
    return(
        <div>
            <h2>Welcome to RenderChild..!!</h2>
            <p>Message Recived From Parent is :{message}</p>

            {createNewComp()}
        </div>
    )
}

export default RenderChild