import { useState } from 'react'

function App() {
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [bankAmount, setBankAmount] = useState(0);

  console.log("re-render check");

  setTimeout(function () {
    setExchangeAmount({
      amount: 100
    })
  }, 3000);

  setTimeout(function () {
    setBankAmount({
      amount: 100
    })
  }, 1000);

  const incomeTaxAmount = (exchangeAmount.amount + bankAmount.amount) * 0.3; 

  return (
    <div>
      The total tax amount is : {incomeTaxAmount}
    </div>
  )
}

export default App
