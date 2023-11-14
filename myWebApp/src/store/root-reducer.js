import { combineReducers } from "redux";

import { NavReducer } from "./navbar/navbar-reducer.js";
import { cartReducer } from "./cart/cart-reducer";
import { productReducer } from "./products/singleProduct-reducer";
import { searchReducer } from "./products/searchProducts/search-reducer.js";

export const rootReducer = combineReducers({
  navbar: NavReducer,
  cart: cartReducer,
  product: productReducer,
  search: searchReducer,
});
