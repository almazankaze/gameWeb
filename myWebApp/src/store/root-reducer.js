import { combineReducers } from "redux";

import { NavReducer } from "./navbar/navbar-reducer.js";

export const rootReducer = combineReducers({
  navbar: NavReducer,
});
