import React, { useState } from "react";

const Controlled = () => {
  const [inputVal, setInputVal] = useState("");

  return (
    <div>
      <h1>controlled components</h1>

      <input
        type="text"
        name="text"
        id=""
        placeholder="enter text"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h1>the input value is {inputVal}</h1>
    </div>
  );
};

/* in a controlled component the form data is maintained by react's state, any changes by the user are controlled within reacts state 
Geeks for Geeks: 
In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.
*/

export default Controlled;
