import { deleteComment } from "../utils/api";

const CommentCard = ({
  comment: { comment_id, body, author, votes },
  username,
  loadComments,
}) => {
  
  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      loadComments();
    });
  };

  return (
    <div>
      <p>{body}</p>
      <p>{author}</p>
      {username === author ? <button onClick={handleDelete}>Delete comment</button> : null}
    </div>
  );
};

export default CommentCard;
