import { memo, useState, useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0);
  
  // if we pass the function as a props not state variable
  // the different functions are not same like an functions f1 and f2 in this f1 == f2 -> gives false 
  // and the different variable are gets same like a=1, b=1 -> here a == b gives true 
  // it works by check the == operator thats why
  // react thinks that if it is true it same (not change the props) and not render the child and 
  // if it is false means the props get change so it re-render the child after using the memo also
  // but in actual scenario the props onClick is not change so it not get re-render
  // we use an useCallback to get rid from re-render the props (like props onClick not change actually)
  
  // without useCallback
  /*
  function onClick() {
    console.log("Child clicked");
  }
  */
  
  // with useCallback
  const onClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <div>
      <Child onClick={onClick} />
      <button onClick={() => {
        setCount(count+1);
      }} >Click me {count}</button>
    </div>
  )
}

const Child = memo(({ onClick }) => {
  console.log("Child render");

  return <div>
    <button onClick={onClick} >Button Clicked</button>
  </div>
});

export default App