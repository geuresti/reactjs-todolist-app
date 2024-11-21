import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react"

function App() {

  // Both TodoInput and TodoList need access to 'todos' so we define them here

  /*let todos = [
    'Go to the gym',
    'eat more veggies bratha',
    'dance w my dogs in the night time'
  ]*/

  // one way to pass info to a component is by used attributes (see TodoList)
  // another way is to use stateful variables (as opposed to a regular var, like 'todos')
  //    if the user is going to interact with the variable it should be stateful

  //    var     setter func          default val
  const [todos, setTodos] = useState([])

  const [todoValue, setTodoValue] = useState('')

  // Update local storage. Call this function anywhere that
  //   todos are modified (handleAdd, handleDelete)
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]

    persistData(newTodoList)

    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    // Cannot modify stateful variable directly, must use setter
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valToBeEdited = todos[index]
    setTodoValue(valToBeEdited)
    handleDeleteTodo(index)
  }

  // will run this code whenever "[value]" is changed
  //  OR leave the brackets empty to update on page load
  useEffect(() => {

    // Make sure local storage exists first
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')

    // Make sure 'todos' exists in storage
    if (!localTodos) {
      return
    }

    // convert data from JSON
    localTodos = JSON.parse(localTodos).todos

    // set todos to what was in local storage
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App