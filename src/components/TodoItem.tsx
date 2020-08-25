import React, { useContext } from 'react';

import { TodoContext } from '../context';

import clsx from 'clsx';

type ItemProps = {
  todo: Todo
}

export const TodoItem = ({todo}:ItemProps) => {
  const { removeTodo, toggleTodo } = useContext(TodoContext);

  const clickHandler = () => {
    toggleTodo(todo.id);
  };

  const removeHandler = () => {
    removeTodo(todo.id);
  };

  const spanClass = clsx('black-text', { completed: todo.completed });

  return (
    <div className='todo'>
    <label>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={clickHandler}
      />
      <span className={spanClass}>{todo.title}</span>
      <button type='button' onClick={removeHandler}>
        <i className='material-icons red-text'>delete</i>
      </button>
    </label>
  </div>
  );
};