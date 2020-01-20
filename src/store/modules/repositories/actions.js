export const requestRepositoriesLoad = username => ({
  type: '@users/REQUEST_REPOSITORIES_LOAD',
  payload: { username },
});

export const repositoriesLoadSuccess = () => ({
  type: '@users/REPOSITORIES_LOAD_SUCCESS',
});

export const repositoriesLoadFailure = erroMessage => ({
  type: '@users/REPOSITORIES_LOAD_FAILURE',
  payload: { erroMessage },
});
