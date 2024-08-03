import React from "react";
import Parent from "./Parent";

const GrandParent = () => {
    return (
        <div id="GrandParent">
            <Parent />
        </div>
    )
};

export default GrandParent;