import React, { useReducer, useEffect, createContext } from 'react';

import { reducer } from '../reducer';
import { IContextProps } from '../types';
import { Method } from '../types'

import { nanoid } from 'nanoid';

type StateProps = {
  children: React.ReactNode
}

export const TodoContext = createContext({} as IContextProps);

export const ContextProvider = ({children}:StateProps) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  const addTodo = (title:string) => {
    if (title.trim()) {
      dispatch({
        type: Method.add,
        id: nanoid(),
        title
      });
    }
  };

  const toggleTodo = (id:string) => {
    dispatch({
      type: Method.toggle,
      id
    });
  };

  const removeTodo = (id:string) => {
    dispatch({
      type: Method.remove,
      id
    });
  };

  const clearTodos = () =>
    dispatch({
      type: Method.clear,
    });

  const value = {
    state,
    dispatch,
    todos:state,
    addTodo,
    toggleTodo,
    removeTodo,
    clearTodos,
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
