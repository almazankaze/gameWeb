import { combineReducers } from "redux";

import { NavReducer } from "./navbar/navbar-reducer.js";
import { cartReducer } from "./cart/cart-reducer";
import { productReducer } from "./products/singleProduct-reducer";
import { homeReducer } from "./home/home-reducer.js";
import { searchReducer } from "./products/searchProducts/search-reducer.js";
import { toastReducer } from "./toast/toast-reducer.js";
import { modalReducer } from "./modal/modal-reducer.js";
import { userReducer } from "./user/user-reducer.js";

export const rootReducer = combineReducers({
  navbar: NavReducer,
  cart: cartReducer,
  product: productReducer,
  home: homeReducer,
  search: searchReducer,
  toast: toastReducer,
  modal: modalReducer,
  user: userReducer,
});
