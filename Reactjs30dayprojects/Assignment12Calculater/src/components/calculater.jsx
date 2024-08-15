import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setDisplay('');
    } else if (value === 'DC') {
      setDisplay(display.slice(0, -1));
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="container">
      <div className="claculator">
        <div className="display">
          <input type="text" value={display} placeholder="0" readOnly />
        </div>
        <div>
          <input type="button" value="AC" onClick={() => handleClick('AC')} className="operater" />
          <input type="button" value="DC" onClick={() => handleClick('DC')} className="operater" />
          <input type="button" value="." onClick={() => handleClick('.')} className="operater" />
          <input type="button" value="/" onClick={() => handleClick('/')} className="operater" />
        </div>
        <div>
          <input type="button" value="7" onClick={() => handleClick('7')} />
          <input type="button" value="8" onClick={() => handleClick('8')} />
          <input type="button" value="9" onClick={() => handleClick('9')} />
          <input type="button" value="*" onClick={() => handleClick('*')} className="operater" />
        </div>
        <div>
          <input type="button" value="4" onClick={() => handleClick('4')} />
          <input type="button" value="5" onClick={() => handleClick('5')} />
          <input type="button" value="6" onClick={() => handleClick('6')} />
          <input type="button" value="-" onClick={() => handleClick('-')} className="operater" />
        </div>
        <div>
          <input type="button" value="1" onClick={() => handleClick('1')} />
          <input type="button" value="2" onClick={() => handleClick('2')} />
          <input type="button" value="3" onClick={() => handleClick('3')} />
          <input type="button" value="+" onClick={() => handleClick('+')} className="operater" />
        </div>
        <div>
          <input type="button" value="00" onClick={() => handleClick('00')} />
          <input type="button" value="0" onClick={() => handleClick('0')} />
          <input type="button" value="=" onClick={() => handleClick('=')} className="equal operater" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
