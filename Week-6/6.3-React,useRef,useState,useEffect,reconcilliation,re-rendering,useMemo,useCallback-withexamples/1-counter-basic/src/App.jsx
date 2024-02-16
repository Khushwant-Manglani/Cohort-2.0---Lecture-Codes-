import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  console.log("Hii there from App.jsx checking re-rendering");

  return (
    <div>
      <button onClick={() => {
        setCount((count) => count+1)
      }}>Counter {count}</button>
    </div>
  )
}

export default App
