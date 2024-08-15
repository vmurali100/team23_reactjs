import React, { useState, useEffect } from 'react';
import start_icon from './start.png';
import reset_icon from './reset.png';
import stop_icon from './stop.png';


const Stopwatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const formatTime = (value) => (value < 10 ? `0$  {value}` : value);

  const startWatch = () => {
    if (timer !== null) clearInterval(timer);
    setTimer(setInterval(updateTime, 1000));
  };

  const stopWatch = () => {
    if (timer !== null) clearInterval(timer);
  };

  const resetWatch = () => {
    if (timer !== null) clearInterval(timer);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const updateTime = () => {
    setTime((prevTime) => {
      let { hours, minutes, seconds } = prevTime;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      return { hours, minutes, seconds };
    });
  };

  return (
    <div className="stopWatch">
      <h1 id="displayTime">
        {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
      </h1>
      <div className="buttons">
        <img src={stop_icon} alt="Stop" onClick={stopWatch} />
        <img src={start_icon} alt="Start" onClick={startWatch} />
        <img src={reset_icon} alt="Reset" onClick={resetWatch} />
      </div>
    </div>
  );
};

export default Stopwatch;
