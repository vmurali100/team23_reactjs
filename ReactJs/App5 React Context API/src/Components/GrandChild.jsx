import React from "react";
import { UserInfoContextConsumer } from "./usercontext";

const GrandChild = () => {
    return(
        <div id="GrandChild">
            <UserInfoContextConsumer>
                {(val)=>{
                    return <ul>
                    <li>{val.Salary}</li>
                    <li>{val.Roll}</li>
                </ul>   
                }}
            </UserInfoContextConsumer>
        </div>
    )
};

export default GrandChild;