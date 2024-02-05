import { useState } from 'react'
import React from 'react'

function App() {

  const [title, setTitle] = useState("My name is Khushwant");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  
  return (
    <div>
      <button onClick={ updateTitle }>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title={title}></Header>
      <Header title="my name is aditya"></Header>
      <Header title="my name is aditya"></Header>
      <Header title="my name is aditya"></Header>
      <Header title="my name is aditya"></Header>
      <Header title="my name is aditya"></Header>
    </div>
  )
}

const Header = React.memo(({ title }) => {
  return <div>
    {title}
  </div>
});

export default App
