import { setIsModalOpen } from "../../store/modal/modal-actions";
import { useDispatch } from "react-redux";
import StarReview from "../star-review/StarReview";
import userIcon from "../../assets/product-page/default-user.png";

import "./comment.scss";

const Comment = ({ commentInfo, productId, user }) => {
  const { _id, author, rating, date, body } = commentInfo;
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setIsModalOpen(productId, _id, true));
  };

  return (
    <div className="comment">
      <div className="author">
        <div className="author-info">
          <img src={userIcon} alt="avatar" />
          <h4>{author.username}</h4>
        </div>
        {user?.result && user.result._id === author._id && (
          <p className="comment-remove" onClick={openModal}>
            Remove
          </p>
        )}
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
