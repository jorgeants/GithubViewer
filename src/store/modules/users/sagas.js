import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { searchSuccess, searchFailure } from '~/store/modules/users/actions';

function* requestSearchUsers(action) {
  try {
    const { searchTerm } = action.payload;

    const response = yield call(api.get, `search/users?q=${searchTerm}`);

    console.tron.log(response.headers.link);

    yield put(searchSuccess(response.data.items));
  } catch (error) {
    yield put(
      searchFailure('Ops! Ocorreu algum erro. Tente novamente mais tarde.')
    );
  }
}

export default all([takeLatest('@users/REQUEST_SEARCH', requestSearchUsers)]);
