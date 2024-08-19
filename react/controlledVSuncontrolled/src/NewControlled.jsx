import React, { useState } from "react";

const NewControlled = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h1>the input is {inputVal}</h1>
    </div>
  );
};

export default NewControlled;
