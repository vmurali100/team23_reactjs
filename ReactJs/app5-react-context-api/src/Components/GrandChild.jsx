import React from "react";
import { PersonInfoContextConsumer } from "./UserContext";

const GrandChild = () => {
    return (
        <div id="GrandChild">
            <PersonInfoContextConsumer>
                {(val) => {
                    return <ul>
                        <li>{val.Salary}</li>
                        <li>{val.Role}</li>
                    </ul>
                }}
            </PersonInfoContextConsumer>
        </div>
    )
};

export default GrandChild;