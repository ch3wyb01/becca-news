import { useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { formatDate } from "../utils/utils";
import { MDBBtn } from "mdb-react-ui-kit";

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
      <div className="d-flex flex-column justify-content-start align-items-start">
      <h6 class='fw-bold mb-1'>{author}</h6>
      <p><small>{formatDate(created_at)}</small></p>
      </div>
      <p className="text-start">{body}</p>
      {/* <p>{votes}</p> */}
      {username === author ? (
        <MDBBtn className="danger" onClick={handleDelete}>Delete comment</MDBBtn>
      ) : null}
      <hr />
    </div>
  );
};

export default CommentCard;
