import React from "react";

const NewChild = ({ count, onCountChange }) => {
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => onCountChange(count + 1)}>increment</button>
      <button onClick={() => onCountChange(count - 1)}>decrement</button>
    </div>
  );
};

export default NewChild;
