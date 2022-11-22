import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./context/reducers";

const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer }

  //composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
