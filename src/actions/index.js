import { ADD_TODO } from 'actions/types';

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo,
});
