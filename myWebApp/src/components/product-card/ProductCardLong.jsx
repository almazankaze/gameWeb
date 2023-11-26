import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-actions";
import StarReview from "../star-review/StarReview";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import currency from "currency.js";

import tempImg from "../../assets/home-images/placeholder.jpg";

import "./product-card-long.scss";

function ProductCardLong({ product }) {
  const {
    _id,
    name,
    shortname,
    price,
    onSale,
    percentOff,
    rating,
    inStock,
    img,
  } = product;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="card-long">
      <div className="card-image-long">
        <Link to={`/products/${_id}`}>
          <img src={img[0] === null ? tempImg : img[0]} alt="product-img" />
        </Link>
        {percentOff ? (
          <div className="card-percent">{percentOff}% OFF</div>
        ) : (
          ""
        )}
      </div>
      <div className="card-long-details">
        <div>
          <Link className="long-desc-link text-link" to={`/products/${_id}`}>
            <h5 className="long-card-desc mb-small overflow-text-2">{name}</h5>
          </Link>
          <Link className="short-desc-link text-link" to={`/products/${_id}`}>
            <h5 className="long-card-desc mb-small overflow-text-2">
              {shortname}
            </h5>
          </Link>

          <div className="card-bonus-details">
            <StarReview rating={rating} />
            <div className={inStock ? "card-stock" : "card-stock card-soldout"}>
              {inStock ? "INSTOCK" : "SOLDOUT"}
            </div>
          </div>
        </div>

        <div className="card-long-price">
          <div className="card-price mb-small">
            <h3>{currency(price.current).format()}</h3>
            {onSale ? (
              <p className="original-price">
                {currency(price.original).format()}
              </p>
            ) : (
              ""
            )}
          </div>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.detail}
            onClick={addProductToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardLong;
