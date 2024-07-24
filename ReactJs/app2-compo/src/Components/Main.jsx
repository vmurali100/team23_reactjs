import { useState } from "react";
import Child from "./Child";

export const Main = () => {
    const [message, setMessage] = useState("Welcome to Main Component");
    const [greetings, setGreetings] = useState("Hello... How are you...!!!")
    return (
        <div>
            <h2>{message} </h2>
            <Child msg={greetings} hello={"Jeswanth"} age={35} />
        </div>
    );
};