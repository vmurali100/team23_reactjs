import React from "react";
import { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  const handleClickCount=()=>{
    setCount(count+1);
  }
  return <div>{render(count, handleClickCount)}</div>;
};

export default Counter;
