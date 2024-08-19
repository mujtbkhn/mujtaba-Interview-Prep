//useMemo --> it is a hook that lets you cache the result of a calculation between re-renders.
//with useMemo the value is memoized so it doesn't cause any re-renders 

//use chrome debugger to show this 

import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

function UseMemo() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100,
    });
  }, []);
  useEffect(() => {
    setExchange2Data({
      returns: 200,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  const cryptoReturns = useMemo(() => {
    console.log("hi there before");
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange1Data]);

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return <>hi there your income tax returns are {incomeTax}</>;
}

export default UseMemo;
