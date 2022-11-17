import { ADD_USER_DETAILS, REMOVE_USER_DETAILS } from "../actions/types";

const user_details = JSON.parse(localStorage.getItem("user_details"));

const initialState = user_details ? user_details : {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_DETAILS:
      return action.payload; //ce val ia state
    case REMOVE_USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
