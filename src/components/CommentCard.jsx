import { useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { formatDate } from "../utils/utils";

const CommentCard = ({
  comment: { comment_id, body, author, votes, created_at },
  loadComments,
}) => {

  const {username} = useContext(UserContext);

  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      loadComments();
    });
  };

  return (
    <div>
      <p>{body}</p>
      <p>{author}</p>
      <p>{formatDate(created_at)}</p>
      <p>{votes}</p>
      {username === author ? (
        <button onClick={handleDelete}>Delete comment</button>
      ) : null}
    </div>
  );
};

export default CommentCard;
