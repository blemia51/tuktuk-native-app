export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const logIn = (login) => ({
  type: LOG_IN_START,
  payload: {
    login
  }
});

export const logInSuccess = (userID, token) => ({
  type: LOG_IN_SUCCESS,
  payload: {
    userID,
    token
  }
});

export const logInFailure = (error) => ({
  type: LOG_IN_FAILURE,
  payload: {
    error,
  }
});