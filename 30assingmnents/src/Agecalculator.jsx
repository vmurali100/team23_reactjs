
import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState('');

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);

    const d1 = birthDateObj.getDate();
    const m1 = birthDateObj.getMonth() + 1; // Months are zero-indexed
    const y1 = birthDateObj.getFullYear();

    const today = new Date();

    const d2 = today.getDate();
    const m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    setResult(`You are ${y3} years, ${m3} months, and ${d3} days old`);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>
          JavaScript <br /> <span>Age Calculator</span>
        </h1>
        <div className="input-box">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]} // Setting max date to today
          />
          <button onClick={calculateAge}>Calculate</button>
        </div>
        <p id="result">{result}</p>
      </div>
    </div>
  );
};

export default AgeCalculator;
