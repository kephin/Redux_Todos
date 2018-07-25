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

  render() {
    if (!this.props.todos) return <div> Loading... </div>;

    return (
      <div>
        <h4>Todo List:</h4>
        <ul>
          {Object.entries(this.props.todos).map(([key, todo]) =>
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

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = dispatch => {
  return {
    toggleTodoStatus(id) { dispatch(actions.toggleTodoStatus(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
