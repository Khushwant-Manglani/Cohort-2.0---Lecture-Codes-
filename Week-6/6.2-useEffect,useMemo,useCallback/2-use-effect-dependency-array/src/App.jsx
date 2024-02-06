import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [selectedId, setSelectedId] = useState(1);
  
  return (
    <div>
      <button onClick={() => {
        setSelectedId(1)
      }}>1</button>
      
      <button onClick={() => {
        setSelectedId(2)
      }}>2</button>
      
      <button onClick={() => {
        setSelectedId(3)
      }}>3</button>
      
      <button onClick={() => {
        setSelectedId(4)
      }}>4</button>

      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  // implement effect
  // if we does not give a state in an dependency array it only render one time
  // but we won't that if the state change that parts get render in DOM
  // then we have to pass that state that gets change to render the DOM with change 
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        setTodo(response.data.todo);
      })
  }, [id]);

  return (
    <div>
      id: {id}
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  )
}

export default App
