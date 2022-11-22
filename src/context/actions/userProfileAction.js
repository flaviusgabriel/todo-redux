import { ADD_USER_PROFILE_IMAGE, REMOVE_USER_PROFILE_IMAGE } from "./types";

export const addUserProfileImage = (payload) => {
  return { type: ADD_USER_PROFILE_IMAGE, payload };
};

export const removeUserProfileImage = (payload) => {
  return { type: REMOVE_USER_PROFILE_IMAGE, payload };
};
