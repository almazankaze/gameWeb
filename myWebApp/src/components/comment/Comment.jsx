import StarReview from "../star-review/StarReview";
import userIcon from "../../assets/product-page/default-user.png";

import "./comment.scss";

const Comment = ({ commentInfo }) => {
  const { author, rating, date, body } = commentInfo;

  return (
    <div className="comment">
      <div className="author">
        <img src={userIcon} alt="avatar" />
        <h4>{author.username}</h4>
      </div>
      <div className="author-rating">
        <StarReview rating={rating} />
        <p>Reviewed {date}</p>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
