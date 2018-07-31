import { SET_VISIBILITY_FILTER } from 'actions/types';

export default (state = 'All', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;

    default:
      return state;
  }
};