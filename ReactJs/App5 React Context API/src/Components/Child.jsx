import React from "react";
import GrandChild from "./GrandChild";

const Child = ({myDetails}) => {
    return(
        <div id="Child">
            <GrandChild myDetails={myDetails}/>
        </div>
    )
};

export default Child;