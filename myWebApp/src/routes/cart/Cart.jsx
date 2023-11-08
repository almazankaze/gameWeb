import { useSelector } from "react-redux";
import currency from "currency.js";
import { selectCartItems } from "../../store/cart/cart-selector";
import { selectCartTotal } from "../../store/cart/cart-selector";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import SectionHeader from "../../components/section-header/SectionHeader";
import CartItem from "../../components/cart/CartItem";

import "./cart.scss";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const subTotal = currency(cartTotal).format();
  const shipping = cartTotal >= 30 ? 0 : 8;
  const taxes = 4;
  const cartFinalTotal = currency(cartTotal).add(shipping).add(taxes).format();

  return (
    <section className="container">
      <SectionHeader title={"Shopping Cart"} />

      {cartItems.length === 0 ? (
        <div className="cart-empty-message">Cart is Empty</div>
      ) : (
        <div className="cart-grid-container">
          <div className="cart-container">
            <div className="cart-header">
              <div className="header-block">
                <span>Product Name</span>
              </div>
              <div className="header-block">
                <span>Price</span>
              </div>
              <div className="header-block">
                <span>Quantity</span>
              </div>
              <div className="header-block">
                <span>Remove</span>
              </div>
            </div>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className="cart-checkout-info">
            <h3>Summary of your purchase</h3>
            <div className="amounts-container">
              <div className="amount">
                <p>Subtotal:</p>
                <p>{subTotal}</p>
              </div>
              <div className="amount">
                <p>Taxes:</p>
                <p>${taxes}.00</p>
              </div>
              <div className="amount">
                <p>Shipping:</p>
                <p>{`$${shipping}.00`}</p>
              </div>
            </div>
            <hr className="cart-checkout-divider"></hr>
            <div className="total-container">
              <h3>Total</h3>
              <h3>{cartFinalTotal}</h3>
            </div>

            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.cart}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
