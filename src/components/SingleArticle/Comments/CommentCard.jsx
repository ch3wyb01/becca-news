import { useContext } from "react";
import { deleteComment } from "../../../utils/api";
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { formatDate } from "../../../utils/utils";
import { MDBBtn } from "mdb-react-ui-kit";
import CommentVotes from "./CommentVotes";
import DeleteCommentModal from "./DeleteCommentModal";

const CommentCard = ({
  comment: { comment_id, body, author, votes, created_at },
  comments,
  setComments,
}) => {
  const { username } = useContext(UserContext);
  const { setModal } = useContext(ModalContext);

  const handleDelete = (comment_id) => {
    const updatedComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    setComments(updatedComments);
    setModal(undefined);
    deleteComment(comment_id).catch(() => {
      setComments(comments);
    });
  };

  return (
    <div>
      <div className="d-flex flex-column justify-content-start align-items-start">
        <h6 className="fw-bold mb-1">{author}</h6>
        <p>
          <small>{formatDate(created_at)}</small>
        </p>
      </div>
      <p className="text-start">{body}</p>
      <div className="d-flex flex-column align-items-center">
        <CommentVotes id={comment_id} votes={votes} author={author} />
        {username === author ? (
          <>
            <MDBBtn
              outline
              color="danger"
              className="px-2 mt-2"
              onClick={() =>
                setModal(
                  <DeleteCommentModal
                    id={comment_id}
                    onDeleteClick={handleDelete}
                  />
                )
              }
            >
              Delete
            </MDBBtn>
          </>
        ) : null}
      </div>
      <hr />
    </div>
  );
};

export default CommentCard;
