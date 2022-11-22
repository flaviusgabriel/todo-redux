import {
  ADD_USER_DETAILS,
  REMOVE_USER_DETAILS,
  UPDATE_USER_DETAILS,
} from "../actions/types";

const user_details = JSON.parse(localStorage.getItem("user_details"));

const initialState = user_details ? user_details : {};

export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case ADD_USER_DETAILS:
      return action.payload; //ce val ia state
    case REMOVE_USER_DETAILS:
      return action.payload;
    case UPDATE_USER_DETAILS:
      //return { ...state, ...payload };
      return Object.assign({}, state, payload);

    default:
      return state;
  }
}
