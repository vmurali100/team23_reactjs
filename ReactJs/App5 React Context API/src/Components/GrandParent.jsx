import React from "react";
import Parent from "./Parent";

const GrandParent = ({myDetails}) => {
    return(
        <div id="GrandParent">
            <Parent myDetails={myDetails}/>
        </div>
    )
}

export default GrandParent;