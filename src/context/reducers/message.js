import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = { message: undefined, type: undefined };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload.message, type: payload.type };

    case CLEAR_MESSAGE:
      return { message: undefined, type: undefined };

    default:
      return state;
  }
}
