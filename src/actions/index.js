import { ADD_TODO, TOGGLE_TODO_STATUS, SET_VISIBILITY_FILTER } from 'actions/types';

export const addTodo = newTodo => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const toggleTodoStatus = id => ({
  type: TOGGLE_TODO_STATUS,
  payload: id,
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter,
});
