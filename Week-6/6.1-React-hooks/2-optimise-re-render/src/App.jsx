import { useState } from 'react'

function App() {
  return (
    <div>
      {/* we have make an component to define state in that so that only the state we have changing that component render not whole app component */}
      <HeaderWithButton></HeaderWithButton>
      <Header title="My name is aman"></Header>
    </div>
  )  
}

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("My name is Khushwant");

  function updateFirstTitle() {
    setFirstTitle("My name is " + Math.random());
  }

  return (
    <>
      <button onClick={ updateFirstTitle } >Click to change the name</button>
      <Header title={firstTitle} ></Header>
    </>
  ) 
}

function Header({ title }) {
  return <div>
    {title}
  </div>
}

export default App
