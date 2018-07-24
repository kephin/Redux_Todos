import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class AddTodo extends Component {
  state = {
    input: '',
  };

  onButtonSubmit = () => {
    this.props.addTodo({ name: this.state.input });
    this.setState({ input: '' });
  }

  onInputChange = evt => {
    this.setState({ input: evt.target.value });
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.onInputChange} />
        <button onClick={this.onButtonSubmit}>Add Todo</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { addTodo(newTodo) { dispatch(actions.addTodo(newTodo)) } };
}

export default connect(null, mapDispatchToProps)(AddTodo);
