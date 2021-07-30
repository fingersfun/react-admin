import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './user';
import modal from './modal';

// Root Reducer.
export default combineReducers({
  routing: routerReducer,
  users,
  modal
});
