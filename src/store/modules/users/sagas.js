import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import {
  searchSuccess,
  searchFailure,
  loadNextPageSuccess,
  userDetailsSuccess,
  userDetailsFailure,
} from '~/store/modules/users/actions';

import getNextPageURL from '~/helpers/getNextPageURL';

function* requestSearchUsers(action) {
  try {
    const { searchTerm } = action.payload;

    const response = yield call(api.get, `/search/users?q=${searchTerm}`);

    const nextPageURL = yield getNextPageURL(response.headers.link);

    yield put(searchSuccess(response.data.items, nextPageURL));
  } catch (error) {
    yield put(
      searchFailure('Ops! Ocorreu algum erro. Tente novamente mais tarde.')
    );
  }
}

function* requestNextPage() {
  try {
    const currentNextPage = yield select(state => state.users.nextPageURL);

    api.baseURL = null;
    const response = yield call(api.get, currentNextPage);

    const nextPageURL = yield getNextPageURL(response.headers.link);

    yield put(loadNextPageSuccess(response.data.items, nextPageURL));
  } catch (error) {
    yield put(
      searchFailure('Ops! Ocorreu algum erro. Tente novamente mais tarde.')
    );
  }
}

function* requestGetUser(action) {
  try {
    const { username } = action.payload;

    const response = yield call(api.get, `/users/${username}`);

    yield put(userDetailsSuccess(response.data));
  } catch (error) {
    yield put(
      userDetailsFailure(
        'Ops! Ocorreu algum erro ao tentar selecionar o usuário.'
      )
    );
  }
}

export default all([
  takeLatest('@users/REQUEST_SEARCH', requestSearchUsers),
  takeLatest('@users/REQUEST_NEXT_PAGE', requestNextPage),
  takeLatest('@users/GET_USER_DETAILS', requestGetUser),
]);
