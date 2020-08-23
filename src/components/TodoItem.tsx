import React, { useContext } from 'react';

import { TodoContext } from '../context';
import { ITodo } from '../types'

import classNames from 'classnames';

type ItemProps = {
  todo: ITodo
}

export const TodoItem: React.FC<ItemProps> = ({todo}) => {
  const { removeTodo, toggleTodo } = useContext(TodoContext);

  const clickHandler = () => {
    toggleTodo(todo.id);
  };

  const removeHandler = () => {
    removeTodo(todo.id);
  };

  const spanClass = classNames('black-text', { completed: todo.completed });

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