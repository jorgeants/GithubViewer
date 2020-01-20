import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import {
  searchSuccess,
  searchFailure,
  loadNextPageSuccess,
} from '~/store/modules/users/actions';

function getNextPageURL(headerLink) {
  const paginationMetaData =
    headerLink && headerLink.length > 0 && headerLink.split(',');

  let pagesObject = [];

  if (paginationMetaData) {
    paginationMetaData.forEach(pageData => {
      const page = pageData.split(';');
      pagesObject = {
        ...pagesObject,
        [page[1].substring(6, page[1].length - 1)]: page[0].trim(),
      };
    });
  }

  // console.tron.log('pagesObject', pagesObject);

  const nextPage =
    pagesObject && pagesObject.next
      ? pagesObject.next.substring(1, pagesObject.next.length - 1)
      : null;

  // console.tron.log('nextPage', nextPage);

  return nextPage;
}

function* requestSearchUsers(action) {
  try {
    const { searchTerm } = action.payload;

    const response = yield call(api.get, `search/users?q=${searchTerm}`);

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
    console.tron.log('nextPageURL', nextPageURL);

    yield put(loadNextPageSuccess(response.data.items, nextPageURL));
  } catch (error) {
    yield put(
      searchFailure('Ops! Ocorreu algum erro. Tente novamente mais tarde.')
    );
  }
}

export default all([
  takeLatest('@users/REQUEST_SEARCH', requestSearchUsers),
  takeLatest('@users/REQUEST_NEXT_PAGE', requestNextPage),
]);