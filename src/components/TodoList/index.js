import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'actions';
import Todo from 'components/Todo';

class TodoList extends PureComponent {
  state = {  }

  onChangeTodoState = id => {
    this.props.toggleTodoStatus(id);
  }

  filterTodos = (todo, filter) => {
    switch (filter) {
      case 'All':
        return true;
      case 'Active':
        return todo.completed === false;
      case 'Completed':
        return todo.completed === true;
    
      default:
        break;
    }
  }
  
  render() {
    if (!this.props.todos) return <div> Loading... </div>;

    return (
      <div>
        <h4>Todo List:</h4>
        <ul>
          {Object.entries(this.props.todos)
            .filter(([key, todo]) => this.filterTodos(todo, this.props.visibilityFilter))
            .map(([key, todo]) =>
              <Todo
                key={key}
                todo={todo}
                onChangeTodoState={this.onChangeTodoState}
              />
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({ todos, visibilityFilter });

const mapDispatchToProps = dispatch => {
  return {
    toggleTodoStatus(id) { dispatch(actions.toggleTodoStatus(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
