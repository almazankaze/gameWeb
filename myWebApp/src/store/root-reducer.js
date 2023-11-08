import { combineReducers } from "redux";

import { NavReducer } from "./navbar/navbar-reducer.js";
import { cartReducer } from "./cart/cart-reducer";

export const rootReducer = combineReducers({
  navbar: NavReducer,
  cart: cartReducer,
});
