// Make Redux Store available
// We will wrap our application with a <Provider> component. It makes the Redux store available to any nested components.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import store from "./store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
