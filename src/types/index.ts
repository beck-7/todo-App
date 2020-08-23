import { State } from '../reducer';
import { TodoActionTypes } from './actions';

export type Actions = TodoActionTypes;

export enum Method {
    add = 'add',
    toggle = 'toggle',
    remove = 'remove',
    clear = 'clear'
}

export interface ITodo {  
    id: string;
    title: string;
    completed: boolean;
}

export interface IContextProps {
    state: State;
    dispatch: React.Dispatch<TodoActionTypes>;
    todos: ITodo[];
    addTodo: (text:string) => void;
    toggleTodo: (id:string) => void;
    removeTodo: (id:string) => void;
    clearTodos: () => void;
}