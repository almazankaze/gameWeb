import Button from "../../components/button/Button";
import Comment from "../../components/comment/Comment";
import ReviewDetails from "../../components/review-details/ReviewDetails";

function ProductReview() {
  const dummyReview = {
    name: "Bryan Alvarez",
    rate: 4,
    date: "January 10, 2023",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat autem neque provident cumque quis vitae earum voluptas, molestiae dolores tenetur accusamus assumenda sunt illum corporis cupiditate amet doloremque mollitia?",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-review">
      <ReviewDetails />
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className="my-review-form"
      >
        <div className="star-container">
          <h3>Your Rating: </h3>
          <div className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label htmlFor="star5" title="5/5">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label htmlFor="star4" title="4/5">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label htmlFor="star3" title="3/5">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label htmlFor="star2" title="2/5">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label htmlFor="star1" title="1/5">
              1 star
            </label>
          </div>
        </div>
        <textarea
          className="comment-box"
          placeholder="Add a comment..."
        ></textarea>

        <Button type="submit">Add Review</Button>
      </form>

      <div className="comment-section">
        <h3>REVIEWS</h3>
        <div className="comments-list">
          <Comment commentInfo={dummyReview} />
          <Comment commentInfo={dummyReview} />
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
