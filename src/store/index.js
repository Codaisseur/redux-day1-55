// src/store/index.js
import { combineReducers, createStore } from "redux";
import counterReducer from "./counter/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    balance: counterReducer,
    // user: userReducer
  }),
  enhancer
);

export default store;
