const INITIAL_STATE = {
  searchTerm: '',
  loading: false,
  error: false,
  errorMessage: '',
  list: [],
  lastSearchedUsers: [],
  nextPageURL: '',
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@users/REQUEST_SEARCH':
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case '@users/SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        list: action.payload.users,
        nextPageURL: action.payload.nextPageURL,
      };
    case '@users/SEARCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case '@users/REQUEST_NEXT_PAGE': {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    }
    case '@users/LOAD_NEXT_PAGE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        list: state.list.concat(action.payload.users),
        nextPageURL: action.payload.nextPageURL,
      };
    default:
      return state;
  }
}
