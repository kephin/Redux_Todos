import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class Filter extends Component {
  state = { 
    filters: ['All', 'Active', 'Completed'],
  }
  
  render() {
    return (
      <p>
        Show:
        {this.state.filters.map(filter =>
          <button key={filter} onClick={() => this.props.filterTodos(filter)}>{filter}</button>
        )}
      </p>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterTodos(filter) { dispatch(actions.filterTodos(filter)) },
  }
}

export default connect(null, mapDispatchToProps)(Filter);
