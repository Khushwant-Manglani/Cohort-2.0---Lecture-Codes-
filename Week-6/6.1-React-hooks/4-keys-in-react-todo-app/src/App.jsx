import { useState } from 'react'

let idCounter=4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to Gym",
    description: "I have to go to the gym"
  }, {
    id: 2,
    title: "Go to Park",
    description: "I have to go to the park"
  }, {
    id: 3,
    title: "Go to Class",
    description: "I have to go to the class"
  }]);

  function addTodo() {
    setTodos([...todos, {
      id: idCounter++,
      title: Math.random(),
      description: Math.random()
    }]);
  }

  return (
    <div>
      <button onClick={ addTodo } >Add a todo</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} description={todo.description} ></Todo>
      })}
    </div>
  )  
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default App
