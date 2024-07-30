import React from "react";
import { useState } from "react";
import RenderChild from "./RenderChild";
import NewChildComp from "./NewChildComp";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";

const RenderMain = () => {
    const [message, setMessage] = useState("Welcome to Render Props Topic..!!")
    const [person, setPerson] = useState({
        fname: "Kotholla",
        lname: "Jachu"
    });
    const [students, setStudents] = useState(["Jeswanth", "Vishal", "Sekhar", "Nethaji"])
    const createNewComp = () => {
        return <NewChildComp />
    }
    return (
        <div>  13:00
            <h2>Welcome to RenderMain Component..!!</h2>
            <hr />
            <RenderChild message={message} person={person} students={students} createNewComp={createNewComp} />
            <ClickCounter/>
            <HoverCounter/>
            {/* <Counter render={(count,setCount)=><clickCounter count={count} setCount={setCount}/>}/> */}
        </div>
    )
}

export default RenderMain