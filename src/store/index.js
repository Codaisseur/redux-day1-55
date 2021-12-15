// src/store/index.js
import { combineReducers, createStore } from "redux";
import pizzasReducer from "./pizzas/reducer";
import userReducer from "./user/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    pizzas: pizzasReducer,
    user: userReducer,
  }),
  enhancer
);

export default store;
