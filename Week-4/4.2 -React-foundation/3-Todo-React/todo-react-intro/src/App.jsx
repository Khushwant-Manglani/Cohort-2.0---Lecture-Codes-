import { useState } from 'react'
import './App.css'

// Dynamic websites
// when we have to create an dynamic website
// we have to write lot of js code that does DOM Manipulation

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      {/* setCount is an constructor initialize the state (count) object */}
      {/* M-1 */}
      <button onClick={ () => setCount((count) => count + 1) }>
        Count is {count}
      </button>

      {/* M-2 */}
      <button onClick={ () => setCount(count + 1) }>
        Count is {count}
      </button>

      {/* M-3 */}
      <button onClick={ () => setCount(incrementCount()) }>
        Count is {count}
      </button>

    </div>
  )

  function incrementCount() {
    return count + 1;
  }
}

export default App
