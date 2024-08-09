import React from "react";
import HocComponent from "./HocComponent";

const HoverCounter = ({ handleIncrement, handleDecrement, count }) => {
  return (
    <div>
      <button onMouseOver={handleIncrement}>Increment</button>
      <button onMouseOut={handleDecrement}>Decrement</button>
      <h2>You Have cliked {count} times</h2>
    </div>
  );
};

export default HocComponent(HoverCounter);
