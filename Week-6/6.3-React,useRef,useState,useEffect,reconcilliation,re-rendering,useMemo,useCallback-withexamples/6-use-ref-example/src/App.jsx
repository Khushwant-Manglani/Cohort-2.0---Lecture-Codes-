import { useState, useEffect, useRef } from 'react'

function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(function() {
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
    }, 5000);
  })

  return (
    <div>
      Your're income tax is : <div ref={divRef}> {incomeTax} </div> 
    </div>
  )
}

export default App
