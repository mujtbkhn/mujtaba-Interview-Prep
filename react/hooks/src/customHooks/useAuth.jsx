import React, { useEffect, useState } from "react";

const UseAuth = () => {
  const token = localStorage.getItem("token");
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (token) {
      setIsAuth(true);
    }
  }, []);
  return { isAuth };
};

export default UseAuth;
