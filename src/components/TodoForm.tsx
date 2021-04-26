import React, { useState, useContext } from 'react'

import { TodoContext } from '../context'

type changeEvent = React.ChangeEvent<HTMLInputElement>
type formEvent = React.FormEvent<HTMLFormElement>

export const TodoForm = () => {
  const [content, setContent] = useState('')
  const { todos, addTodo, clearTodos } = useContext(TodoContext)

  const changeHandler = (e: changeEvent) => {
    setContent(e.target.value)
  }

  const submitHandler = (e: formEvent) => {
    e.preventDefault()
    addTodo(content)
    setContent('')
  }

  const uncompletedTodos = todos.some((todo) => !todo.completed)
  const completedTodos = todos.some((todo) => todo.completed)
  const todoCounter = todos && todos.filter((todo) => !todo.completed).length

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-field">
        <form onSubmit={submitHandler}>
          <label className="active">Todo name</label>
          <input type="text" value={content} onChange={changeHandler} />
        </form>
      </div>
      {completedTodos && (
        <button className="waves-effect waves-light btn" onClick={clearTodos}>
          Clear Completed Todos
        </button>
      )}
      {uncompletedTodos && (
        <span className="indigo-text todo-counter">{todoCounter} left to do</span>
      )}
    </div>
  )
}
