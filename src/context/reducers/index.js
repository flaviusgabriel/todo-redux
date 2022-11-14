import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth,
  message,
  form: reduxForm,
});
