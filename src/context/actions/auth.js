// Auth Actions Creator
// This is creator for actions related to authentication. We’re gonna import AuthService to make asynchronous HTTP requests with trigger one or more
// dispatch in the result.

// => login()

// calls the AuthService.login(email, password)
// dispatch LOGIN_SUCCESS and SET_MESSAGE if successful
// dispatch LOGIN_FAIL and SET_MESSAGE if failed

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./types";

import AuthService from "../services/auth-service";

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token_id: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
