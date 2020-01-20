import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

function* requestSearchUsers(action) {
  try {
    const { searchTerm } = action.payload;

    const response = yield call(api.get, `search/users?q=${searchTerm}`);
  } catch (error) {}
}

export default all([
  takeLatest('@users/REQUEST_REPOSITORIES', requestSearchUsers),
]);
