import React, { PureComponent } from 'react';

import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import Filter from 'components/Filter';

class App extends PureComponent {
  render() {
    return (
      <div className='App'>
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
    );
  }
}

export default App;
