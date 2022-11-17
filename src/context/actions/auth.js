import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth-service";

import { type } from "../../views/components/form/alert.types";

import { addUserDetails } from "./userDetailsAction";

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token_id: response.data.token_id },
      });

      addUserDetails(response.data.user);

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
        payload: { message: message, type: type.danger },
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

export const register = (age, email, name, password) => (dispatch) => {
  return AuthService.register(age, email, name, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { message: response.data.message, type: type.successfull },
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
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { message: message, type: type.danger },
      });

      return Promise.reject();
    }
  );
};
