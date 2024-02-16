import { useState, useEffect, useMemo, memo, useCallback } from 'react'

function App() {  
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  // useEffect is asynchrounous function 
  // it will wait bottom code execute before it 

  useEffect(() => {
    setExchange1Data({
      amount: 100
    })
  }, []);

  useEffect(() => {
    setExchange2Data({
      amount: 100
    })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        amount: 100
      })
    }, 5000);
  }, []);

  // If we don't pass state as an props, instead we pass variable, function as a parameter
  // thenn react behaves as == operator for that parameters
  // like let a=1 and let b=1 => a==b gives true 
  // like function sum1(a, b) {return a+b} and function sum2(a, b) {return a+b} => sum1==sum2 gives false 
  // so it thinks that in variable get true means props not change
  // and in function get false means props get change so 
  // it re-render again and again the component that has props pass the a function when it parent component means App component re-render 
  // so we use useCallback() it gives correct output then child component not get re-render again when parent component gets re-render
  // note that in useMemo() we get an value in variable but in useCallback() we get function

  const calculateCryptoAmount = useCallback(function calculateCryptoAmount() {
    return exchange1Data.amount + exchange2Data.amount; 
  }, [exchange1Data, exchange2Data]);

  return (
    <div>
      <CryptoGainAmount calculateCryptoAmount={calculateCryptoAmount} />
      <Dummy></Dummy>
    </div>
  )
}

const Dummy = memo(function Dummy() {
  console.log("Dummmy re-render");
  return (
    <div>
      Hii there
    </div>
  )
});

const CryptoGainAmount = memo(function CryptoGainAmount({calculateCryptoAmount}) {
  console.log("CryptoGainAmount re-render");
  return (
    <div>
      Hii your crypto earning is: {calculateCryptoAmount()}
    </div>
  )  
});

export default App
