import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef();
  const displayValue = () => {
    alert(
      `Input value not controlled by react but by dom : ${inputRef.current.value}`
    );
  };
  return (
    <div>
      <h1>Uncontrolled</h1>
      <input type="text" name="text" id="" ref={inputRef} />
      <button onClick={displayValue}>Display Value </button>
    </div>
  );
};

/*
Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.
*/

export default Uncontrolled;
