import React, { useReducer, useEffect, createContext } from 'react'

import { reducer } from '../reducer'

import { nanoid } from 'nanoid'

interface StateProps {
  children: React.ReactNode
}

interface ContextProps {
  state: State
  dispatch: React.Dispatch<Actions>
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
  clearTodos: () => void
}

export const TodoContext = createContext({} as ContextProps)

export const ContextProvider = ({ children }: StateProps) => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos') || '[]'))

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = (title: string) => {
    if (title.trim()) {
      dispatch({
        type: 'add',
        id: nanoid(),
        title,
      })
    }
  }

  const toggleTodo = (id: string) => {
    dispatch({
      type: 'toggle',
      id,
    })
  }

  const removeTodo = (id: string) => {
    dispatch({
      type: 'remove',
      id,
    })
  }

  const clearTodos = () =>
    dispatch({
      type: 'clear',
    })

  const value = {
    state,
    dispatch,
    todos: state,
    addTodo,
    toggleTodo,
    removeTodo,
    clearTodos,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
