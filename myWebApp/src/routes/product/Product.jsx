import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-actions";
import { getProduct } from "../../store/products/singleProduct-actions";
import {
  selectProduct,
  selectIsLoading,
} from "../../store/products/singleProduct-selector";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import ProductReview from "./ProductReview";
import ImageZoom from "../../components/image-zoom/ImageZoom";
import StarReview from "../../components/star-review/StarReview";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Spinner from "../../components/spinner/Spinner";

import currency from "currency.js";
import tempImg from "../../assets/home-images/fire-engage.png";

import "./product.scss";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const [detailsBtn, setDetailsBtn] = useState(true);
  const [reviewBtn, setReviewBtn] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);

  const toggleDetailsBtn = () => {
    if (!detailsBtn) {
      setDetailsBtn(true);
      setReviewBtn(false);
    }
  };

  const toggleReviewBtn = () => {
    if (!reviewBtn) {
      setDetailsBtn(false);
      setReviewBtn(true);
    }
  };

  const increment = () => {
    if (quantity < 50) setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  };

  const addProductToCart = () => {
    if (quantity <= 0) return;
    dispatch(addItemToCart(cartItems, SHOP_DATA[0], quantity));
    setQuantity(0);
  };

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const product = useSelector(selectProduct);
  const isLoading = useSelector(selectIsLoading);

  return (
    <section className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="product-page-container">
          <div className="product-control-container">
            <div className="product-image-controller">
              <ImageZoom zoomImg={tempImg} />
              <div className="product-small-images">
                <div className="small-image-container">
                  <img src={tempImg} alt="small" />
                </div>
                <div className="small-image-container">
                  <img src={tempImg} alt="small" />
                </div>
                <div className="small-image-container">
                  <img src={tempImg} alt="small" />
                </div>
                <div className="small-image-container">
                  <img src={tempImg} alt="small" />
                </div>
              </div>
            </div>

            <div className="product-controller">
              <h2>{product.name}</h2>

              <div className="product-control-review">
                <StarReview rating={product.rating} />
                <p>(2 customer reviews)</p>
              </div>

              <div className="product-price-stock">
                <div className="product-control-price">
                  <h3>
                    {product.onSale
                      ? currency(product.dprice).format()
                      : currency(product.oprice).format()}
                  </h3>
                  {product.onSale ? (
                    <p className="product-slashed-price">
                      {currency(product.oprice).format()}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={
                    product.inStock
                      ? "product-stock"
                      : "product-stock product-soldout"
                  }
                >
                  {product.inStock ? "INSTOCK" : "SOLDOUT"}
                </div>
              </div>

              <div className="product-control-quantity">
                <div className="quantity-input">
                  <button
                    className="quantity-input-btn quantity-input-btn__left"
                    onClick={decrement}
                  >
                    &mdash;
                  </button>
                  <input
                    className="quantity-input-screen"
                    type="number"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="quantity-input-btn quantity-input-btn__right"
                    onClick={increment}
                  >
                    &#xff0b;
                  </button>
                </div>
                <div className="quantity-buttons">
                  <Button
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES.cart}
                    onClick={addProductToCart}
                  >
                    Add to Cart
                  </Button>
                  <div className="product-favorite-btn">
                    <FavoriteBorderIcon />
                  </div>
                </div>
              </div>

              <div className="product-extra-details">
                <p>Free shipping on orders over $30!</p>
                <ul>
                  <li>Satisfaction Guaranteed</li>
                  <li>No Hassle Refunds</li>
                  <li>Secure Payments</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-button-container">
            <Button
              type="button"
              className={detailsBtn ? "active-detail" : null}
              buttonType={BUTTON_TYPE_CLASSES.switch}
              onClick={toggleDetailsBtn}
            >
              Description
            </Button>
            <Button
              type="button"
              className={reviewBtn ? "active-detail" : null}
              buttonType={BUTTON_TYPE_CLASSES.switch}
              onClick={toggleReviewBtn}
            >
              Reviews (2)
            </Button>
          </div>
          <div
            className={
              detailsBtn
                ? "product-description-container show-product-section"
                : "product-description-container hide-product-section"
            }
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              unde laborum, dolorum eaque iusto magni aliquam delectus est illo
              perferendis consectetur porro! Autem assumenda deserunt
              accusantium excepturi a laudantium ullam. Ratione, nulla beatae
              tempore alias sunt laboriosam porro tenetur unde adipisci deserunt
              non ullam quos accusantium cupiditate dolorem odit velit
              temporibus sapiente aut debitis blanditiis. Dolores earum mollitia
              quos harum.
            </p>
          </div>

          <div
            className={
              reviewBtn ? "show-product-section" : "hide-product-section"
            }
          >
            <ProductReview />
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
