import { combineReducers } from 'redux';

import users from './users/reducer';
import repositories from './repositories/reducer';

export default combineReducers({
  users,
  repositories,
});
