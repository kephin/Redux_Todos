import { ADD_TODO, TOGGLE_TODO_STATUS } from 'actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, ...action.payload };
    case TOGGLE_TODO_STATUS:
      const id = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          completed: !state[id].completed,
        },
      };

    default:
      return state;
  }
};
