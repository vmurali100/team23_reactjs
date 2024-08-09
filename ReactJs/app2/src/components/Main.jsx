import { useState } from "react"
import Child from "./Child";
import AddValue from "./Addvalue";
import RemoveValue from "./Removelist";
import AddValueForm from "./AddValueForm";
import UserMultipleInputs from "./UserMultipleInputs"


export const Main = () => {
    const [message, setmessage] = useState("Welcome to Main component"); 
    const [greetings, setgreetings] = useState("Hellow How are you from main component")
    const sayhellowFunc = () => {
        // alert("Hellow from say hellow function")
        setmessage("Hellow from event binding !!!!")
    }

    return (
        <div>
            {/* <button onClick={sayhellowFunc}>Say Hellow</button> */}
            <h2>{message}</h2>
            {/* <Child msg={greetings} hellow={"Welcome !!!"} Age={45}/> */}
            {/* <AddValue/> */}
            {/* <RemoveValue/> */}
            {/* <AddValueForm/> */}
            <UserMultipleInputs/>


        </div>
    )
}