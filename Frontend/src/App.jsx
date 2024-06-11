import React, { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3001/todos")
  .then(async function(res){
    const json = await res.json()
    setTodos(json.todos)
  })
  return (
    <div>
      <CreateTodo />
      <Todo todos = {
        todos
      } />
    </div>
  )
}

export default App
