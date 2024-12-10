import React from "react";
import { useState } from "react";
import HocComponent from "./HocComponent";

const ClickCounter = ({ handleIncrement, handleDecrement, count }) => {
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h2>You Have cliked {count} times</h2>
    </div>
  );
};

export default HocComponent(ClickCounter);
