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
          <button
            disabled={this.props.filter === filter}
            style={{marginLeft: '4px'}}
            key={filter}
            onClick={() => this.props.filterTodos(filter)}
          >
            {filter}
          </button>
        )}
      </p>
    );
  }
}

const mapStateToProps = ({ filter }) => ({ filter });

const mapDispatchToProps = dispatch => {
  return {
    filterTodos(filter) { dispatch(actions.filterTodos(filter)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
