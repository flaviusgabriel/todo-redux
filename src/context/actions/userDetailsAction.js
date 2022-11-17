import { ADD_USER_DETAILS, REMOVE_USER_DETAILS } from "./types";

export const addUserDetails = (payload) => {
  return { type: ADD_USER_DETAILS, payload }; //payload - ce ii trimit sa imi schimbe val din store
};

export const removeUserDetails = () => {
  return { type: REMOVE_USER_DETAILS, payload: {} };
};
