import { setIsModalOpen } from "../../store/modal/modal-actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user-selector";

import StarReview from "../star-review/StarReview";
import userIcon from "../../assets/product-page/default-user.png";

import "./comment.scss";

const Comment = ({ commentInfo, productId }) => {
  const { _id, author, rating, date, body } = commentInfo;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setIsModalOpen(productId, _id, true));
  };

  return (
    <div className="comment">
      <div className="author">
        <div className="author-info">
          {author?.thumbnail ? (
            <img src={author.thumbnail} alt="avatar" />
          ) : (
            <img src={userIcon} alt="avatar" />
          )}
          <h4>{author.username}</h4>
        </div>
        {user && user._id === author._id && (
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
