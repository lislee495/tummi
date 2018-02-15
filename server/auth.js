export const login = (credentials, history) => dispatch => {
  axios.put('/auth/login', credentials)
    .then(res => setUserAndRedirect(res.data, history, dispatch))
    .catch(err => console.error(`Logging in with ${credentials.email} and ${credentials.password} was unsuccesful`, err));
};

export const logout = history => dispatch => {
  axios.delete('/auth/logout')
    .then(res => dispatch(removeCurrentUser(res.data)))
    .then(() => history.push('/login'))
    .catch(err => console.error('Logging out was unsuccesful', err));
};

export const signup = credentials => dispatch => {
  axios.post('/auth/signup', credentials)
    .then(res => setUserAndRedirect(res.data, history, dispatch))
    .catch(err => console.error(`Signing up with ${credentials.email} and ${credentials.password} was unsuccesful`, err));
};

export const fetchCurrentUser = () => dispatch => {
  axios.get('/auth/me')
    .then(res => setCurrentUser(res.data))
    .catch(err => console.error('Fetching current user failed', err));
};
