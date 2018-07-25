import React from 'react';

const Todo = props => (
  <li
    style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }}
    onClick={() => props.onChangeTodoState(props.todo.id)}
  >
    {props.todo.name}
  </li>
);

export default Todo;
