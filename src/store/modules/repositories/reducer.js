const INITIAL_STATE = {
  username: '',
  loading: false,
  error: false,
  errorMessage: '',
  list: [],
  lastRepositories: [],
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
