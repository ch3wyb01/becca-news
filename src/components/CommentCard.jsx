const CommentCard = ({ comment: { body, author, votes } }) => {
  return (
    <div>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default CommentCard;
