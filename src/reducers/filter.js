import { FILTER_TODOS } from 'actions/types';

export default (state = 'All', action) => {
  switch (action.type) {
    case FILTER_TODOS:
      return action.payload;

    default:
      return state;
  }
};