import React from "react";
import { useState } from "react";

const GuessTheCounterValue = () => {
  const [counter, setCounter] = useState(69);

  const handleIncrement = () => {
    setCounter(counter + 1);
    //what if i added multiple setCounter increments?
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    //what will be the output? will it be 75?
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Count : {counter}</h1>
      <button onClick={() => handleIncrement()}>Increment {counter}</button>
      <button onClick={() => handleDecrement()}>Decrement {counter}</button>
    </div>
  );
};

export default GuessTheCounterValue;

/**
 * ANSWER
 * 
 * 
 * 
 * 
 * 
 * 
 * it will still only increment one.... why ? because of the new Fiber architecture which makes the diffing algorithm update in batches so it will update the increment functions setCounter values in batches and only update it one time because all the setCounter states updates the values for once only 
 * 
 * 
 * WHAT IF I WANT TO SPECIFICALLY UPDATE TO MULTIPLE TIMES ? then we can use prevState and update it which lets react know to update the value from its previous states no matter how many times (but this is not optimal)
 * 
 *    setCounter((prevCounter) => prevCounter + 1); update it to 70 (prevCounter value is 69)
 *    setCounter((prevCounter) => prevCounter + 1); update it to 71 (prevCounter value now becomes 70)
      
 */
