export const requestRepositoriesLoad = username => ({
  type: '@repositories/REQUEST_REPOSITORIES_LOAD',
  payload: { username },
});

export const repositoriesLoadSuccess = repositories => ({
  type: '@repositories/REPOSITORIES_LOAD_SUCCESS',
  payload: { repositories },
});

export const repositoriesLoadFailure = erroMessage => ({
  type: '@repositories/REPOSITORIES_LOAD_FAILURE',
  payload: { erroMessage },
});
