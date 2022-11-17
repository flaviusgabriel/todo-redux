import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (value) => ({
  type: SET_MESSAGE,
  payload: { message: value.message, type: value.type },
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
