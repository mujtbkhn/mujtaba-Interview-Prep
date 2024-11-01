import React, { useState } from "react";
import Child from "./Child";


const ChildToParent = () => {
  const [count, setCount] = useState(0);

  const onCountChange = (data) => {
    setCount(data);
  };
  return (
    <div>
      <h1>Child to Parent</h1>
      <button>Count : {count}</button>
      <Child count={count} onCountChange={onCountChange} />
    </div>
  );
};

export default ChildToParent
