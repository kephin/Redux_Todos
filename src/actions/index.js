import { ADD_TODO, TOGGLE_TODO_STATUS, FILTER_TODOS } from 'actions/types';

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const toggleTodoStatus = id => ({
  type: TOGGLE_TODO_STATUS,
  payload: id,
});

export const filterTodos = filter => ({
  type: FILTER_TODOS,
  payload: filter,
});
