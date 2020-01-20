const INITIAL_STATE = {
  loading: false,
  error: false,
  errorMessage: '',
  list: [],
  lastLastUsers: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@users/REQUEST_SEARCH':
      return {
        ...state,
        loading: true,
      };
    case '@users/SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.payload.users,
      };
    case '@users/SEARCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
