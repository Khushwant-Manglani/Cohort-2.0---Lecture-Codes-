import { useState } from 'react'

// state
// todos: [{title: "the title", description: "the description", completed: false},  .........]

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to the gym at 7 to 9",
    complete: false
  }, {
    title: "Study web dev",
    description: "study development at 9 to 10",
    complete: true
  }]);

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "Go for a walk",
      description: "Go for a walk from 10 to 11"
    }]);
  }

  return (
    <div>
      <button onClick={ addTodo }>Add a random todo</button>

      {/* <TodoComponent title={todos[0].title} description={todos[0].description} ></TodoComponent>
      <TodoComponent title={todos[1].title} description={todos[1].description} ></TodoComponent> */}
      {todos.map((todo) => {
        return <TodoComponent title={todo.title} description={todo.description} />
      })}
    </div>
  );
}

// todo App
// {
//   title
//   description
//   completed
// }

function TodoComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
