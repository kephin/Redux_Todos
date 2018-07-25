import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import * as actions from 'actions';

class AddTodo extends PureComponent {
  state = {
    input: '',
  };

  onButtonSubmit = () => {
    const id = shortid.generate();
    this.props.addTodo({
      [id]: {
        id,
        name: this.state.input,
        completed: false,
      },
    });
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
