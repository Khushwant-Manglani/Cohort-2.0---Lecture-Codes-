import { useState, useEffect, useMemo } from 'react'

// useMemo
function App() {
  const [inputVal, setInputVal] = useState(1);
  const [counter, setCounter] = useState(0);
  // Approach - 1 -> using useEffect but it has to be an new state and update the state, 
  // and again re-render happen due to update state one more time
  // it check the dependency array that which state is given in that update that state
  // const [finalSum, setFinalSum] = useState(1);

  // useEffect(() => {
  //   let sum=0;
  //   for(let num=1 ; num<=inputVal ; ++num) {
  //     sum += num;
  //   }
  //   setFinalSum(sum);
  // }, [inputVal]);

  // Approach - 2 -> useMemo -> not need of state variable update the simple variable by 
  // check the state that given in dependency array that change
  
  let finalSum = useMemo(() => {
    console.log("Memo get called");
    let sum=0;
    for(let num=1 ; num<=inputVal ; ++num)
      sum += num;
    return sum;
  }, [inputVal]);
  

  return (
    <div>
      <div>
        <input type="text" placeholder={"Enter the value of n"} onChange={(e) => {
          setInputVal(e.target.value);
        }} />
      </div>
      <div>
        Sum from 1 to {inputVal} is {finalSum}
      </div>
      <div>
        <button onClick={() => {
          setCounter(counter+1)
        }}>Counter ({counter})</button>
      </div>
    </div>
  )
}

export default App
