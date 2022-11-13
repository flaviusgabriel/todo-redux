import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./context/reducers";
//import { reducers as reduxForm } from "redux-form";

const middleware = [thunk];

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
