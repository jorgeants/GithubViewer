export const requestSearch = searchTerm => ({
  type: '@users/REQUEST_SEARCH',
  payload: { searchTerm },
});

export const searchSuccess = users => ({
  type: '@users/SEARCH_SUCCESS',
  payload: { users },
});

export const searchFailure = errorMessage => ({
  type: '@users/SEARCH_FAILURE',
  payload: { errorMessage },
});

export const selectUser = username => ({
  type: '@users/SELECT_USER',
  payload: { username },
});
