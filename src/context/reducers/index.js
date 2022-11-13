// Create Redux Reducers
// There will be two reducers in src/context/reducers folder, each reducer updates a different part of the state corresponding to dispatched Redux actions.

// Combine Reducers
// Because we only have a single store in a Redux application. We use reducer composition instead of many stores to split data handling logic.

import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth,
  message,
  form: reduxForm,
});
