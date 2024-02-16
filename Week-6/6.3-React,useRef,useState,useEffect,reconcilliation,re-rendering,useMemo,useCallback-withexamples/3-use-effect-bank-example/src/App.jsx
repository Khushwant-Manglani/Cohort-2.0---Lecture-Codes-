import { useState, useEffect } from 'react'

function App() {
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [bankAmount, setBankAmount] = useState(0);

  // console.log("re-render check");

  // useEffect lets stop the re-rendering it only re-render once when state get change
  // it has two parameter useEffect(callbackFn(logic), dependency array)
  // if the dependency array is empty then it re-render the conponent once when state get change
  // but if it is not empty if the state x is present then if the x state get change then re-render happens again

  useEffect(function() {
    setTimeout(function() {
      console.log("Exchange Amount get change");
      setExchangeAmount({
        amount: 100
      })
    }, 3000);
  }, [])

  useEffect(function() {
    console.log("Bank Amount get change");
    setTimeout(function () {
      setBankAmount({
        amount: 100
      })
    }, 1000);
  }, [])

  const incomeTaxAmount = (exchangeAmount.amount + bankAmount.amount) * 0.3; 

  return (
    <div>
      The total tax amount is : {incomeTaxAmount}
    </div>
  )
}

export default App
