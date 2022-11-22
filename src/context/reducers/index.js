import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import { reducer as reduxForm } from "redux-form";
import userDetails from "./userDetails";
import updateUserDetails from "./userDetails";
import userProfileImage from "./userProfileImage";

export default combineReducers({
  auth,
  message,
  form: reduxForm,
  userDetails,
  userProfileImage,
});
