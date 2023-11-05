import { Link } from "react-router-dom";
import StarReview from "../star-review/StarReview";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import tempImg from "../../assets/home-images/fire-engage.png";

import "./product-card-long.scss";

function ProductCardLong({ product }) {
  const { id, name, dprice, oprice, percentOff, rating, inStock, img } =
    product;

  return (
    <div className="card-long">
      <div className="card-image-long">
        <Link to={`product/${id}`}>
          <img src={tempImg} alt="product-img" />
        </Link>
        {percentOff ? (
          <div className="card-percent">{percentOff}% OFF</div>
        ) : (
          ""
        )}
      </div>
      <div className="card-long-details">
        <div>
          <h5 className="long-card-desc mb-small overflow-text-2">{name}</h5>
          <div className="card-bonus-details">
            <StarReview rating={rating} />
            <div className={inStock ? "card-stock" : "card-stock card-soldout"}>
              {inStock ? "INSTOCK" : "SOLDOUT"}
            </div>
          </div>
        </div>

        <div className="card-long-price">
          <div className="card-price mb-small">
            <h3>${dprice ? dprice : oprice}</h3>
            {dprice ? <p className="original-price">${oprice}</p> : ""}
          </div>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.detail}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardLong;
