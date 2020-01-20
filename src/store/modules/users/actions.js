export const requestSearch = searchTerm => ({
  type: '@users/REQUEST_SEARCH',
  payload: { searchTerm },
});

export const searchSuccess = () => ({
  type: '@users/SEARCH_SUCCESS',
});

export const searchFailure = erroMessage => ({
  type: '@users/SEARCH_FAILURE',
  payload: { erroMessage },
});
