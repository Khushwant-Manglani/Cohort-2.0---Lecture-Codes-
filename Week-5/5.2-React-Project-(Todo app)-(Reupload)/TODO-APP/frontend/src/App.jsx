import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // Infinitely sending request from this method, it is not good method
  // useEffect hooks 
  fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });

  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
      </div>
  );
}

export default App
