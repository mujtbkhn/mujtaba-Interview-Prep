import React, { useState } from "react";
const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);

  const handleStart = () => {
    clearInterval(timeInterval)
    setTimeInterval(
      setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000)
    );
  };

  const handleStop = () => {
    clearInterval(timeInterval);
  };

  const handleReset = () => {
    clearInterval(timeInterval);
    setTimer(0);
  };

  const handleReverse = () => {
    clearInterval(timeInterval)
    setTimeInterval(
      setInterval(() => {
        setTimer((timer) => timer - 1)
      }, 1000)
    )
  }
  return (
    <div>
      <h1>timer:{timer}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleReverse}>reverse</button>
    </div>
  );
};

export default Timer;
