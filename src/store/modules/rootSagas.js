import { all } from 'redux-saga/effects';

import users from './users/sagas';
import repositories from './repositories/sagas';

export default function* rootSaga() {
  return yield all([users, repositories]);
}
