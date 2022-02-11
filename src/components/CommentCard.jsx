import { useContext } from "react";
import { deleteComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { formatDate } from "../utils/utils";
import { MDBBtn } from "mdb-react-ui-kit";
import ArticleVotes from "./ArticleVotes";
import CommentVotes from "./CommentVotes";

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
      <h6 className='fw-bold mb-1'>{author}</h6>
      <p><small>{formatDate(created_at)}</small></p>
      </div>
      <p className="text-start">{body}</p>
      <div className="d-flex flex-column align-items-center"> 
      <CommentVotes id={comment_id} votes={votes} author={author}/>
      {username === author ? (
        <MDBBtn color="danger" className="px-2 mt-2" onClick={handleDelete}>Delete</MDBBtn>
      ) : null}
      </div>
      <hr />
    </div>
  );
};

export default CommentCard;
