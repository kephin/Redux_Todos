import React from 'react';

const Todo = props => {
  return (
    <li>{props.todo.name}</li>
  );
}

export default Todo;