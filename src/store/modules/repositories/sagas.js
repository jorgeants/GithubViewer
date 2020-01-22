import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import {
  repositoriesLoadSuccess,
  repositoriesLoadFailure,
  repositoriesMountResume,
  repositoriesUpdateResume,
} from '~/store/modules/repositories/actions';

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

    yield put(repositoriesLoadSuccess(response.data));
    yield put(repositoriesMountResume(response.data));
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
  takeLatest('@repositories/REPOSITORIES_MOUNT_RESUME', mountResume),
]);
