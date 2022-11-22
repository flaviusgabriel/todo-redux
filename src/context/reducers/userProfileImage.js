import {
  ADD_USER_PROFILE_IMAGE,
  REMOVE_USER_PROFILE_IMAGE,
} from "../actions/types";

const avatar = JSON.parse(localStorage.getItem("avatar"));

const initialState = avatar ? avatar : "";

export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case ADD_USER_PROFILE_IMAGE:
      return payload;
    case REMOVE_USER_PROFILE_IMAGE:
      return payload;
    // case UPDATE_USER_PROFILE_IMAGE:
    //   return;
    default:
      return state;
  }
}
