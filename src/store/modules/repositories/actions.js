export const clearRepositoriesList = () => ({
  type: '@repositories/CLEAR_REPOSITORIES_LIST',
});

export const requestRepositoriesLoad = username => ({
  type: '@repositories/REQUEST_REPOSITORIES_LOAD',
  payload: { username },
});

export const repositoriesLoadSuccess = (repositories, nextPageURL) => ({
  type: '@repositories/REPOSITORIES_LOAD_SUCCESS',
  payload: { repositories, nextPageURL },
});

export const repositoriesLoadFailure = erroMessage => ({
  type: '@repositories/REPOSITORIES_LOAD_FAILURE',
  payload: { erroMessage },
});

export const repositoriesMountResume = () => ({
  type: '@repositories/REPOSITORIES_MOUNT_RESUME',
});

export const repositoriesUpdateResume = resume => ({
  type: '@repositories/REPOSITORIES_UPDATE_RESUME',
  payload: { resume },
});

export const requestNextPage = () => ({
  type: '@repositories/REQUEST_NEXT_PAGE',
});

export const loadNextPageSuccess = (repositories, nextPageURL) => ({
  type: '@repositories/LOAD_NEXT_PAGE_SUCCESS',
  payload: { repositories, nextPageURL },
});
