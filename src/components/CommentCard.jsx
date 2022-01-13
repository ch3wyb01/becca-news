import { useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";


const CommentCard = ({
  comment: { comment_id, body, author, votes },
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
      {username === author ? (
        <button onClick={handleDelete}>Delete comment</button>
      ) : null}
    </div>
  );
};

export default CommentCard;
