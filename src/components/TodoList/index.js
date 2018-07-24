import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todo from 'components/Todo';

class TodoList extends PureComponent {
  state = {  }
  
  render() {
    if (!this.props.todos) return <div> Loading... </div>;

    return (
      <div>
        <h4>Todo List:</h4>
        <ul>
          {this.props.todos.map(todo => <Todo key={todo.name} todo={todo} />)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoList);
