import React, { memo, useCallback, useEffect, useState } from "react";

const UseCallback = () => {
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

  const cryptoCalc = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  return (
    <>
      <CryptoGains cryptoCalc={cryptoCalc} />
      <Dummy />
    </>
  );
};

const CryptoGains = memo(({ cryptoCalc }) => {
  console.log("CryptoGains re-rendered");
  return <>Your crypto returns are {cryptoCalc()}</>;
});

const Dummy = memo(() => {
  console.log("Dummy re-rendered");
  return (
    <>
      <h1>Hi there</h1>
    </>
  );
});

export default UseCallback;
