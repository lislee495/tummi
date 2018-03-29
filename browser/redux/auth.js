import axios from 'axios';

/* -----------------    ACTION TYPES    ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

/* ------------     ACTION CREATORS      ------------------ */

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user: user
});
const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});
const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage: errorMessage
})
/* ------------          REDUCER         ------------------ */

export default function reducer(currentUser = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    case REMOVE_CURRENT_USER:
      return {};
    case SET_ERROR_MESSAGE:
      return action.errorMessage
    default:
      return currentUser;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

export const login = (credentials, history) => dispatch => {
  axios.put('/auth/local/login', credentials)
    .then(res => setUserAndRedirect(res.data, history, dispatch))
    .catch(err => {
      dispatch(setErrorMessage(`Logging in with ${credentials.email} was unsuccessful`))
      console.log(err)
    })
}

export const logout = history => dispatch => {
  axios.delete('/auth/local/logout')
    .then(res => dispatch(removeCurrentUser(res.data)))
    .then(() => history.push('/'))
    .catch(err => console.error('Logging out was unsuccesful', err));
};

export const signup = (credentials, history) => dispatch => {
  axios.post('/auth/local/signup', credentials)
    .then(res => setUserAndRedirect(res.data, history, dispatch))
    .catch(err => {
      dispatch(setErrorMessage(`Signing up with ${credentials.email} was unsuccessful`))
      console.error(err)
    });
};

export const fetchCurrentUser = () => dispatch => {
  axios.get('/auth/local')
    .then(res => dispatch(setCurrentUser(res.data)))
    .catch(err => console.error('Fetching current user failed', err));
};

/* ------------      HELPER FUNCTIONS     ------------------ */

function setUserAndRedirect(user, history, dispatch) {
  dispatch(setCurrentUser(user));
  history.push('/');
}