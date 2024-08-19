import React from "react";

const Child = ({ count }) => {
  return (
    <div>
      <h1>Child</h1>
      <button>Count: {count}</button>
    </div>
  );
};

export default Child;
