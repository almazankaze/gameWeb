import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart-actions";
import { selectCartItems } from "../../store/cart/cart-selector";
import currency from "currency.js";

import tempImg from "../../assets/home-images/fire-engage.png";

import "./cart.scss";

const CartItem = ({ cartItem }) => {
  const { id, shortname, img, oprice, dprice, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="cart-item-container">
      <div className="image-container">
        <Link to={`/product/${id}`}>
          <img src={tempImg} alt={shortname} />
        </Link>

        <span className="name"> {shortname} </span>
      </div>
      <span className="price">
        {dprice ? currency(dprice).format() : currency(oprice).format()}
      </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CartItem;
