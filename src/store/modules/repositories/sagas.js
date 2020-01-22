import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import {
  repositoriesLoadSuccess,
  repositoriesLoadFailure,
  repositoriesMountResume,
  repositoriesUpdateResume,
  loadNextPageSuccess,
} from '~/store/modules/repositories/actions';

import getNextPageURL from '~/helpers/getNextPageURL';

import convertKiloBytes from '~/helpers/convertKiloBytes';
import countItensRepeatedArray from '~/helpers/countItemsRepeatedArray';

function* mountResume() {
  const allList = yield select(state => state.repositories.list);

  let totalSize = 0;
  const languages = [];
  let totalOpenIssuesCount = 0;

  yield allList.forEach(item => {
    totalSize += item.size;
    if (item.language) {
      languages.push(item.language);
    }
    totalOpenIssuesCount += item.open_issues_count;
  });

  yield put(
    repositoriesUpdateResume({
      totalSize: convertKiloBytes(totalSize),
      languages: countItensRepeatedArray(languages),
      totalOpenIssuesCount,
    })
  );
}

function* loadRepositories(action) {
  try {
    const { username } = action.payload;

    const response = yield call(api.get, `/users/${username}/repos`);

    const nextPageURL = yield getNextPageURL(response.headers.link);

    yield put(repositoriesLoadSuccess(response.data, nextPageURL));
    yield put(repositoriesMountResume());
  } catch (error) {
    yield put(
      repositoriesLoadFailure(
        'Ops! Ocorreu algum erro ao tentar selecionar o usuário.'
      )
    );
  }
}

function* requestNextPage() {
  try {
    const currentNextPage = yield select(
      state => state.repositories.nextPageURL
    );

    api.baseURL = null;
    const response = yield call(api.get, currentNextPage);

    const nextPageURL = yield getNextPageURL(response.headers.link);

    yield put(loadNextPageSuccess(response.data, nextPageURL));
    yield put(repositoriesMountResume());
  } catch (error) {
    yield put(
      repositoriesLoadFailure(
        'Ops! Ocorreu algum erro. Tente novamente mais tarde.'
      )
    );
  }
}

export default all([
  takeLatest('@repositories/REQUEST_REPOSITORIES_LOAD', loadRepositories),
  takeLatest('@repositories/REPOSITORIES_MOUNT_RESUME', mountResume),
  takeLatest('@repositories/REQUEST_NEXT_PAGE', requestNextPage),
]);
