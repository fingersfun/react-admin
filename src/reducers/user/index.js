import { actions } from 'actions/user.action';

// Initial State
const INITIAL_STATE = {
  user: null,
  allUsers: null,
  currentUser: null,
  loading: false
};

// User Reducer.
export default (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case actions.SET_USER_INFO:
      return { ...state, user: data };
    case actions.SET_ALL_USERS:
      return { ...state, allUsers: data };
    case actions.SET_CURRENT_USER:
      return { ...state, currentUser: data };
    case actions.SET_USER_LOADER:
      return { ...state, loading: data };
    default:
      return state;
  }
}