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

export const repositoriesMountResume = () => ({
  type: '@repositories/REPOSITORIES_MOUNT_RESUME',
});

export const repositoriesUpdateResume = resume => ({
  type: '@repositories/REPOSITORIES_UPDATE_RESUME',
  payload: { resume },
});
