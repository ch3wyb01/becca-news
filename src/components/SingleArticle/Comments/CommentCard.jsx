import { useContext } from "react";
import { deleteComment } from "../../../utils/api";
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { formatDate } from "../../../utils/utils";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
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
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex flex-column align-items-start justify-content-center">
          <h6 className="fw-bold mb-1">{author}</h6>
          <p>
            <small>{formatDate(created_at)}</small>
          </p>
        </div>
        {username === author ? (
          <>
            <MDBBtn
              color="link"
              className="px-3 py-2 text-danger fs-6"
              onClick={() =>
                setModal(
                  <DeleteCommentModal
                    id={comment_id}
                    onDeleteClick={handleDelete}
                  />
                )
              }
            >
              <MDBIcon fas icon="trash-alt" />
            </MDBBtn>
          </>
        ) : null}
      </div>
      <p className="text-start">{body}</p>
      <div className="d-flex flex-column align-items-center">
        <CommentVotes id={comment_id} votes={votes} author={author} />
      </div>
      <hr />
    </div>
  );
};

export default CommentCard;
