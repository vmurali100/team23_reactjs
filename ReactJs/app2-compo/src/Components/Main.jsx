import { useState } from "react";
import AddValue from "./AddValue";
import Child from "./Child";

export const Main = () => {
    const [message, setMessage] = useState("Welcome to Main Component");
    const [greetings, setGreetings] = useState("Hello... How are you...!!!")

    const sayhelloFunc = () => {
        // alert("Hello from sayhellofunc...!!!")
        setMessage("Hello From Event Binding...!!!")
    }
    return (
        <div>
            <h2>{message} </h2>
            <button onClick={sayhelloFunc}>Say Hello</button>
            <Child msg={greetings} hello={"Jeswanth"} age={35} />
            <AddValue/>
        </div>
    );
};