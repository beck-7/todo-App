import React, { useContext } from 'react'

import { TodoItem } from './TodoItem'
import { TodoContext } from '../context'

export const TodoList = () => {
  const { todos } = useContext(TodoContext)

  return (
    <div className="container">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  )
}
