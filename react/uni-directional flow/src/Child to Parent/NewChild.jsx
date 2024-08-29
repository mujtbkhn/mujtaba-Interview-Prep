import React from "react";

const NewChild = ({ count, onCountChange }) => {
  return (
    <div>
      <h1>this is child</h1>
      <h1>count : {count}</h1>
      <button onClick={() => onCountChange(count + 1)}>Increment</button>
      <button onClick={() => onCountChange(count - 1)}>Decrement</button>
    </div>
  );
};

export default NewChild;
