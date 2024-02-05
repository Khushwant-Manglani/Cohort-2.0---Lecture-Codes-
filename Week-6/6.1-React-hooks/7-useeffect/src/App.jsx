import { useState, useEffect } from 'react'

function App() {
  
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   alert("Hi there");
  // }, []);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 5000);
  }, []);

  return (
    <div>
      {todos.map(todo => <DisplayTodo key={todo.id} title={todo.title} desciption={todo.desciption} /> )}
    </div>
  )

}

function DisplayTodo({ title, desciption }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{desciption}</h2>
    </div>
  )
}   

export default App
