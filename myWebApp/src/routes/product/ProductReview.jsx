import { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/products/singleProduct-actions";
import { getUser } from "../../store/user/user-actions";
import { selectUser } from "../../store/user/user-selector";
import {
  selectProduct,
  selectIsLoading,
} from "../../store/products/singleProduct-selector";
import { setShowToast } from "../../store/toast/toast-actions";
import Button from "../../components/button/Button";
import Comment from "../../components/comment/Comment";
import ReviewDetails from "../../components/review-details/ReviewDetails";
import Spinner from "../../components/spinner/Spinner";

function ProductReview({ productId }) {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    body: "",
  });

  const [errors, setErrors] = useState({});
  const schema = {
    rating: Joi.number().min(1).max(5).required(),
    body: Joi.string().required(),
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      rating: reviewData.rating,
      body: reviewData.body,
    };

    const result = Joi.validate(reviewData, schema, {
      abortEarly: false,
    });

    const { error } = result;
    if (!error) {
      dispatch(createReview(productId, review)).then((resp) => {
        if (resp === 200) {
          dispatch(setShowToast(true, "Succesfully added review"));
          clearState();
        } else if (resp === 405)
          dispatch(setShowToast(true, "Already posted here.", "Failed"));
        else if (resp === 401) {
          dispatch(getUser()).then(() => {
            dispatch(setShowToast(true, "Please log back in.", "Failed"));
          });
        } else
          dispatch(
            setShowToast(true, "Could not post review. Try again.", "Failed")
          );
      });
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setErrors(errorData);
      return errorData;
    }
  };

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let data = { ...reviewData };
    data[name] = value;
    setReviewData(data);
    setErrors(errorData);
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };
  const clearState = () => {
    setReviewData({
      rating: 0,
      body: "",
    });
  };

  const product = useSelector(selectProduct);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  if (isLoading) {
    return <Spinner />;
  }

  if (!product.reviews) return <div className="product-review"></div>;

  return (
    <div className="product-review">
      {!product.reviews.length && !isLoading ? "" : <ReviewDetails />}

      {user ? (
        <form
          autoComplete="off"
          noValidate
          className="my-review-form"
          id="my-review-form"
        >
          <div className="star-container">
            <h3>Your Rating: </h3>
            <div className="rate">
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                onClick={handleSave}
              />
              <label htmlFor="star5" title="5/5">
                5 stars
              </label>
              <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
                onClick={handleSave}
              />
              <label htmlFor="star4" title="4/5">
                4 stars
              </label>
              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                onClick={handleSave}
              />
              <label htmlFor="star3" title="3/5">
                3 stars
              </label>
              <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
                onClick={handleSave}
              />
              <label htmlFor="star2" title="2/5">
                2 stars
              </label>
              <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
                onClick={handleSave}
              />
              <label htmlFor="star1" title="1/5">
                1 star
              </label>
            </div>
            {errors.rating && (
              <div className="alert alert-danger">
                Please rate between 1 and 5 stars
              </div>
            )}
          </div>
          <textarea
            className="comment-box"
            name="body"
            placeholder="Add a comment..."
            value={reviewData.body}
            onChange={handleSave}
          ></textarea>
          {errors.body && (
            <div className="alert alert-danger">
              Comment Box is not allowed to be empty
            </div>
          )}

          <Button type="button" onClick={handleSubmit}>
            Add Review
          </Button>
        </form>
      ) : (
        <div className="text-center login-message">
          please{" "}
          <Link className="secondary-color text-link text-bold" to="/auth">
            LOGIN
          </Link>{" "}
          to review
        </div>
      )}

      <div className="comment-section">
        <h3>REVIEWS</h3>

        {!product.reviews.length && !isLoading ? (
          <div className="text-center">
            <h3>No reviews yet. Be the first to leave a review!</h3>
          </div>
        ) : (
          <div className="comments-list">
            {product.reviews.map((review) => (
              <Comment
                key={review._id}
                productId={product._id}
                commentInfo={review}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductReview;
