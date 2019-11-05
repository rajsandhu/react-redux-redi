import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import countReducer from "./countReducer";
import multiplyReducer from "./multiplyReducer";

const store = createStore(combineReducers({ countReducer, multiplyReducer }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
