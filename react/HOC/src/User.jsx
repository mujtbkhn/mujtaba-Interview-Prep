import React from "react";

const User = () => {

  const user = {
    name: "mujtaba khan",
    age: 22,
    password: "idontknow",
  };
  return (
    <div>
      User Details
      <h1>name : {user.name}</h1>
      <h1>Age : {user.age}</h1>
      <h1>Password : {user.password}</h1>
      
    </div>
  );
};

export default User;
