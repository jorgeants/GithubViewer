import { all, takeLatest, call, put } from 'redux-saga/effects';

function* requestSearchUsers(action) {
  const { searchTerm } = action.payload;

  console.tron.log(searchTerm);
}

export default all([takeLatest('@users/REQUEST_SEARCH', requestSearchUsers)]);
