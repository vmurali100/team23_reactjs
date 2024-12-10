import React, { useState } from 'react';

const ColorBox = ({ initialColor }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    setColor(prevColor => (prevColor === 'blue' ? 'red' : 'blue'));
  };

  return (
    <div>
      <div
        id="color-box"
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
        }}
      ></div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorBox;
