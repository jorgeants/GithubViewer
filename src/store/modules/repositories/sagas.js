import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import {
  repositoriesLoadSuccess,
  repositoriesLoadFailure,
} from '~/store/modules/repositories/actions';

function* loadRepositories(action) {
  try {
    const { username } = action.payload;

    const response = yield call(api.get, `/users/${username}/repos`);

    console.tron.log(response.data);

    yield put(repositoriesLoadSuccess(response.data));
  } catch (error) {
    yield put(
      repositoriesLoadFailure(
        'Ops! Ocorreu algum erro ao tentar selecionar o usuário.'
      )
    );
  }
}

export default all([
  takeLatest('@repositories/REQUEST_REPOSITORIES_LOAD', loadRepositories),
]);
