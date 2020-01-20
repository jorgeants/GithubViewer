export const requestSearch = searchTerm => ({
  type: '@users/REQUEST_SEARCH',
  payload: { searchTerm },
});

export const searchSuccess = (users, nextPageURL) => ({
  type: '@users/SEARCH_SUCCESS',
  payload: { users, nextPageURL },
});

export const searchFailure = errorMessage => ({
  type: '@users/SEARCH_FAILURE',
  payload: { errorMessage },
});

export const requestNextPage = () => ({
  type: '@users/REQUEST_NEXT_PAGE',
});

export const loadNextPageSuccess = (users, nextPageURL) => ({
  type: '@users/LOAD_NEXT_PAGE_SUCCESS',
  payload: { users, nextPageURL },
});

export const selectUser = username => ({
  type: '@users/SELECT_USER',
  payload: { username },
});
