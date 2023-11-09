import StarReview from "../star-review/StarReview";
import "./review-details.scss";

const ReviewDetails = () => {
  return (
    <div className="review-details">
      <div className="review-left">
        <h2>5.0</h2>
        <StarReview rating={5} />
        <p>193 Reviews</p>
      </div>
      <div className="review-bars">
        <div className="side">
          <div>5 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-5"></div>
          </div>
        </div>
        <div className="side right">
          <div>91%</div>
        </div>
        <div className="side">
          <div>4 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-4"></div>
          </div>
        </div>
        <div className="side right">
          <div>7%</div>
        </div>
        <div className="side">
          <div>3 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-3"></div>
          </div>
        </div>
        <div className="side right">
          <div>2%</div>
        </div>
        <div className="side">
          <div>2 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-2"></div>
          </div>
        </div>
        <div className="side right">
          <div>0%</div>
        </div>
        <div className="side">
          <div>1 star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className="bar-1"></div>
          </div>
        </div>
        <div className="side right">
          <div>0%</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
