import React from "react";

const Child = ({ count, onCountChange }) => {
  return (
    <div>
      <h1>Child</h1>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          onCountChange(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          onCountChange(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Child;
