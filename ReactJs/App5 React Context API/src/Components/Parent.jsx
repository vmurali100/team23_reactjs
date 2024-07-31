import React from "react";
import Child from "./Child";

const Parent = ({myDetails}) => {
    return(
        <div id="Parent">
            <Child myDetails={myDetails}/>
        </div>
    )
}

export default Parent;