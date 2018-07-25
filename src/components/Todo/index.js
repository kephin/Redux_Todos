import React from 'react';

const Todo = props => (
  <li style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }}>
    {props.todo.name}
  </li>
);

export default Todo;
