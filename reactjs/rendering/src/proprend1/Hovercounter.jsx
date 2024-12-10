import React, { useState } from "react";

const HoverCounter = ({ count, handleClickCount }) => {
  return (
    <div>
      <button onMouseOver={handleClickCount}>Increment Count</button>
      <h2>You Hovered {count} times</h2>
    </div>
  );
};

export default HoverCounter;