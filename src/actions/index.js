import { ADD_TODO, TOGGLE_TODO_STATUS } from 'actions/types';

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const toggleTodoStatus = id => ({
  type: TOGGLE_TODO_STATUS,
  payload: id,
});
