import { useState, useEffect, useMemo } from 'react'

function App() {
  console.log("render");
  
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  // useEffect is asynchrounous function 
  // it will wait bottom code execute before it 

  useEffect(() => {
    console.log("exchange 1");
    setExchange1Data({
      amount: 100
    })
  }, []);

  useEffect(() => {
    console.log("exchange 2");
    setExchange2Data({
      amount: 100
    })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log("exchange 3");
      setBankData({
        amount: 100
      })
    }, 5000);
  }, []);

  // cryptoAmount will re-render again and again on every render 
  // but there is not need to re-render again and again 
  // only has to re-render when exchange1Data, exchange2Data gets change
  // so we use the useMemo here and pass exchange1Data, exchange2Data in the dependency array

  const cryptoAmount = useMemo(() => {
    console.log("before cryptoamount");
    return exchange1Data.amount + exchange2Data.amount;
  }, [exchange1Data, exchange2Data]);

  const incomeTaxAmount = (cryptoAmount + bankData.amount) * 0.3;

  return (
    <div>
      You're income tax returns is: {incomeTaxAmount}
    </div>
  )
}

export default App
