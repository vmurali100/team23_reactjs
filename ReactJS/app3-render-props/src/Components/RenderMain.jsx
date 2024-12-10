import React from "react";
import { useState } from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import NewChildComp from "./NewChildComp";
import RenderChild from "./RenderChild";

const RenderMain = () => {
  const [message, setMessage] = useState("Welcome to Render Props Topic !!");
  const [person, setPerson] = useState({
    fname: "Ram",
    lname: "krishna",
  });
  const [users, setUsers] = useState(["Vishal", "jashwanth", "Shekar"]);
  const createNewComp = () => {
    return <NewChildComp />;
  };
  return (
    <div>
      <h2>Welcome to RenderMain Component !!!</h2>

      {/* <RenderChild 
        message={message} 
        person={person} 
        users={users}
        createNewComp={createNewComp}
    /> */}
    
      <Counter render={(count,setCount)=> <ClickCounter count={count} handleClickCount={setCount}/>}/>
      <hr />
      <Counter render={(count,setCount)=> <HoverCounter count={count} handleClickCount={setCount}/>}/>

      {/* <ClickCounter/>
    <hr />
    
    <HoverCounter/> */}
    </div>
  );
};

export default RenderMain;
