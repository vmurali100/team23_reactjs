import { useState } from "react";
import AddValue from "./AddValue";
import AddValueForm from "./AddValueForm";
import Child from "./Child";
import ConditionRendering from "./ConditionRendering";
import RemoveValue from "./RemoveValue";
import UserMultipleInput from "./UserMultipleInput";

export const Main = () => {
  const [message, setMessage] = useState("Welcome to Main Comp");
  const [greetings, setGreetings] = useState("Hello ... How are you !!");
  
  const sayhelloFunc = ()=>{
    // alert("Hello From sayhelloFunc !!!")
    setMessage("Hello From Event Binding !!!")
  }
  return (
    <div>
      <h2>{message}</h2>

      {/* <button onClick={sayhelloFunc}>SAY HELLO</button> */}
      {/* <Child msg={greetings} hello={"Welcome"} age={45}/> */}
      {/* <AddValue/> */}
      {/* <RemoveValue/> */}
      {/* <AddValueForm/> */}
      <UserMultipleInput/>
      {/* <ConditionRendering/> */}
    </div>
  );
};
