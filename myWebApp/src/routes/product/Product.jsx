import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-actions";
import { getProduct } from "../../store/products/singleProduct-actions";
import {
  selectProduct,
  selectIsLoading,
  selectProductError,
} from "../../store/products/singleProduct-selector";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import ProductReview from "./ProductReview";
import ImageZoom from "../../components/image-zoom/ImageZoom";
import StarReview from "../../components/star-review/StarReview";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Spinner from "../../components/spinner/Spinner";

import currency from "currency.js";

const testImages = [
  "https://res.cloudinary.com/dp8afa9xy/image/upload/v1700972183/testWeb/nd4ce5dpljajjj4tkb3b.jpg",
  "https://res.cloudinary.com/dp8afa9xy/image/upload/v1700972183/testWeb/nd4ce5dpljajjj4tkb3b.jpg",
  "https://res.cloudinary.com/dp8afa9xy/image/upload/v1700972183/testWeb/ta864p6mmgeozzhkui8b.jpg",
  "https://res.cloudinary.com/dp8afa9xy/image/upload/v1700972127/testWeb/ftchzl7frtiiffaewtrh.jpg",
];

import "./product.scss";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const [detailsBtn, setDetailsBtn] = useState(true);
  const [reviewBtn, setReviewBtn] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);

  let navigate = useNavigate();

  const toggleImage = (index) => {
    setCurrentImg(index);
  };

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
  const productError = useSelector(selectProductError);

  if (productError) {
    if (productError?.response?.status === 404)
      return <Navigate to="/notfound" />;
    else return <Navigate to="/notfound" />;
  }

  if (!product.img && !isLoading)
    return (
      <section className="container">
        <Spinner />
      </section>
    );

  if (isLoading)
    return (
      <section className="container">
        <Spinner />
      </section>
    );

  return (
    <section className="container">
      <div className="product-page-container">
        <div className="product-control-container">
          <div className="product-image-controller">
            <ImageZoom
              zoomImg={
                product.img.length === 0
                  ? testImages[currentImg]
                  : product.img[currentImg]
              }
            />
            <div className="product-small-images">
              <div
                className={
                  currentImg === 0
                    ? "small-image-active small-image-container"
                    : "small-image-container"
                }
              >
                <img
                  src={
                    product.img.length === 0 ? testImages[0] : product.img[0]
                  }
                  alt="small"
                  onClick={() => toggleImage(0)}
                />
              </div>
              <div
                className={
                  currentImg === 1
                    ? "small-image-active small-image-container"
                    : "small-image-container"
                }
              >
                <img
                  src={product.img.length <= 1 ? testImages[1] : product.img[1]}
                  alt="small"
                  onClick={() => toggleImage(1)}
                />
              </div>
              <div
                className={
                  currentImg === 2
                    ? "small-image-active small-image-container"
                    : "small-image-container"
                }
              >
                <img
                  src={product.img.length <= 2 ? testImages[2] : product.img[2]}
                  alt="small"
                  onClick={() => toggleImage(2)}
                />
              </div>
              <div
                className={
                  currentImg === 3
                    ? "small-image-active small-image-container"
                    : "small-image-container"
                }
              >
                <img
                  src={product.img.length <= 3 ? testImages[3] : product.img[3]}
                  alt="small"
                  onClick={() => toggleImage(3)}
                />
              </div>
            </div>
          </div>

          <div className="product-controller">
            <h2>{product.name}</h2>

            <div className="product-control-review">
              <StarReview rating={product.rating} />
              {product.reviews && (
                <p>{`(${product.reviews.length} customer reviews)`}</p>
              )}
            </div>

            <div className="product-price-stock">
              <div className="product-control-price">
                <h3>
                  {product.onSale
                    ? currency(product.price.current).format()
                    : currency(product.price.original).format()}
                </h3>
                {product.onSale ? (
                  <p className="product-slashed-price">
                    {currency(product.price.original).format()}
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
                  id="product-quantity-input"
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
            Reviews {`(${product.reviews.length})`}
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod unde
            laborum, dolorum eaque iusto magni aliquam delectus est illo
            perferendis consectetur porro! Autem assumenda deserunt accusantium
            excepturi a laudantium ullam. Ratione, nulla beatae tempore alias
            sunt laboriosam porro tenetur unde adipisci deserunt non ullam quos
            accusantium cupiditate dolorem odit velit temporibus sapiente aut
            debitis blanditiis. Dolores earum mollitia quos harum.
          </p>
        </div>

        <div
          className={
            reviewBtn ? "show-product-section" : "hide-product-section"
          }
        >
          <ProductReview productId={id} />
        </div>
      </div>
    </section>
  );
};

export default Product;
