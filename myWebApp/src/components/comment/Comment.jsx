import StarReview from "../star-review/StarReview";
import userIcon from "../../assets/product-page/default-user.png";

import "./comment.scss";

const Comment = ({ commentInfo }) => {
  const { name, rate, img, date, review } = commentInfo;

  return (
    <div className="comment">
      <div className="author">
        <img src={userIcon} alt="avatar" />
        <h4>{name}</h4>
      </div>
      <div className="author-rating">
        <StarReview rating={rate} />
        <p>Reviewed {date}</p>
      </div>
      <p>{review}</p>
    </div>
  );
};

export default Comment;
