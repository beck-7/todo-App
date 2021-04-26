import React from 'react'
import { ContextProvider } from './context'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <TodoForm />
      <TodoList />
    </ContextProvider>
  )
}
