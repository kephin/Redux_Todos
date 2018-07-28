import { combineReducers } from 'redux';

import todos from 'reducers/todos';
import filter from 'reducers/filter';

export default combineReducers({
  todos,
  filter,
});
