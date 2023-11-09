import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import ProductReview from "./ProductReview";
import ImageZoom from "../../components/image-zoom/ImageZoom";
import tempImg from "../../assets/home-images/fire-engage.png";

import "./product.scss";

const Product = () => {
  const [detailsBtn, setDetailsBtn] = useState(true);
  const [reviewBtn, setReviewBtn] = useState(false);

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

  return (
    <section className="container">
      <div className="product-page-container">
        <div className="product-control-container">
          <ImageZoom zoomImg={tempImg} />
          <div className="product-controller"></div>
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
          <ProductReview />
        </div>
      </div>
    </section>
  );
};

export default Product;
