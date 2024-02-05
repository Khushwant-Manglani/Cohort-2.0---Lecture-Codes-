import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment} from 'react'

function App() {

  const [title, setTitle] = useState("My name is Khushwant");

  // if the state is present in this component then
  // if a state variable (title) get change then it re-render its parent component in this case is (App) again and again when state variable changes 
  // whole component change -> we have to optimise the re-render for button

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  // React components return
  return (
    // or you can use React.Fragment if you not destructure the Fragment from react
    // or you can use an empty tag <> </> instead of div
    // we use this all to not create any parent of these Header component
    <Fragment>
      <button onClick={ updateTitle }>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="my name is aditya"></Header>
    </Fragment>
  )
}

function Header({ title }) {
  return <div>
    {title}
  </div>
}

export default App
