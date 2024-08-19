import React from "react";
import { useState } from "react";

const WhenRerender = () => {
  console.log("App rendered");

  const [value, setValue] = useState(1); // call by value(primitive type)
  //   const [value, setValue] = useState({
  //     value: 0, //call by reference (non-primitive type)
  //   });

  // const[value, setValue] = useState([1]) //call by reference (non-primitive type)

  const clickMe = () => {
    setValue(15);
    // setValue({
    //   value: 0,
    // });
    // setValue([1])
  };

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => clickMe()}>Click Me</button>
    </div>
  );
};

export default WhenRerender;

/**
 * WHEN WE ARE CALLING BY VALUE: 
 * first render: component mounted
 * second render : value changed (15)
 * third render : value changed but still is 15 so it will remember that the value is not changing so it will not re-render from here
 * 
 * WHEN WE ARE CALLING BY REFERENCE: 
 * infinite times re-rendering bcoz we are playing with the reference (memory) and not the actual value we dont know whats inside of it so we will re-render it as many times ({} [] box mein kya hai hamein nahi pata?)
 */