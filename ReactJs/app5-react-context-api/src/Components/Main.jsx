import React, { useState } from "react";
import GrandParent from "./GrandParent";
import { PersonInfoContextProvider } from "./UserContext";

const Main = () => {
    const [PersonInfo, setPersonInfo] = useState({
        Salary: 150000,
        Role: "Full Stack Developer"
    })
    return (
        <div id="mainComp">
            <PersonInfoContextProvider value={PersonInfo}>
                <GrandParent />
            </PersonInfoContextProvider>

        </div>
    )
};

export default Main;