import { useState } from 'react'

export const CreateTodo = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return <div>
    <input style={{
      padding: 10,
      margin: 10
    }}
    type="text" placeholder="title" onChange={(e) => {
      setTitle(e.target.value);
    }} /> <br />
    
    <input style={{
      padding: 10,
      margin: 10
    }} type="text" placeholder="description" onChange={(e) => {
      setDescription(e.target.value);
    }} /> <br />
    
    <button style={{
      padding: 10,
      margin: 10
    }} onClick={ () => {
      // axios makes our work simpler to fetch
      fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }) 
        .then(async (res) => {
          const json = await res.json();
          alert("Todo Added");
        })
    } }>Add a todo</button>
  </div>
}