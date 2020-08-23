import { Method } from '../types';

export interface AddAction {
    type: typeof Method.add;
    title: string;
    id: string;
}
  
export interface ToggleAction {
    type: typeof Method.toggle;
    id: string;
}
  
export interface RemoveAction {
    type: typeof Method.remove;
    id: string;
}
  
export interface ClearAction {
    type: typeof Method.clear;
  }
  
export type TodoActionTypes = 
       | AddAction
       | RemoveAction
       | ToggleAction
       | ClearAction;