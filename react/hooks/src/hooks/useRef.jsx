//useState() = Re-renders the component when the state value changes

//useRef() = "use Reference" does not cause re-renders when its value changes
//useRef returns an object, with one value of current property, the object can store a value, an array, an object or an HTML element, useRef can be useful with
/**
 * 1. Accessing/interacting with DOM elements
 * 2. Handling Focus, animation and transition
 * 3. Managing timers and Intervals
 */

import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const UseRef = () => {
  const ref = useRef(0);
  const inputRef = useRef("pizza"); //initializes the initial value of the element as "pizza"

  const handleInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";

    // DOM manipulation
  };
  useEffect(() => {
    console.log("Component rendered");
  });
  console.log(inputRef)

  const handleClick = () => {
    ref.current++;
    console.log(ref.current);
  };
  //component will only render once even when we click me as useRef doesnt cause any re-renders
  return (
    <>
      <div>useRef</div>
      <button onClick={handleClick}>Click Me!</button>

      <br />
      <br />
      <br />
      <br />
      {/* Accessing/Manipulating DOM elements */}
      <button onClick={handleInput}>Focus</button>
      <input type="text" ref={inputRef} placeholder={inputRef.current} />
    </>
  );
};

export default UseRef;
