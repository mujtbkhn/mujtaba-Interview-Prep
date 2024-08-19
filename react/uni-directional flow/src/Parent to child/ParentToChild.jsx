import React, { useState } from "react";
import Child from "./Child";

const ParentToChild = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent to Child</h1>
      <h1>Parent</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <Child count={count} />
    </div>
  );
};

export default ParentToChild;
