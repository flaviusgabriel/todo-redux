// Create Redux Store
// This Store will bring Actions and Reducers together and hold the Application state.

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./context/reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
