const INITIAL_STATE = {
  username: '',
  loading: false,
  error: false,
  errorMessage: '',
  list: [],
  resume: {
    totalSize: 0,
    languages: null,
    totalOpenIssuesCount: 0,
  },
  lastRepositories: [],
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@repositories/REQUEST_REPOSITORIES_LOAD':
      return {
        ...state,
        username: action.payload.username,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case '@repositories/REPOSITORIES_LOAD_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        list: action.payload.repositories,
      };
    case '@repositories/REPOSITORIES_LOAD_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case '@repositories/REPOSITORIES_UPDATE_RESUME':
      return {
        ...state,
        resume: action.payload.resume,
      };
    default:
      return state;
  }
}
