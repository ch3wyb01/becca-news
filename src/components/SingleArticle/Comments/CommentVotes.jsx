import { useState } from "react";
import { patchCommentVotes } from "../../../utils/api";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const CommentVotes = ({ id, votes, author }) => {
  const [commentVotes, setCommentVotes] = useState(votes);
  const [hasVoted, setHasVoted] = useState(false);

  const { username } = useContext(UserContext);

  const handleClick = () => {
    if (!hasVoted) {
      setCommentVotes((currVotes) => currVotes + 1);
      setHasVoted(true);
      patchCommentVotes(id, 1).catch(() => {
        setCommentVotes((currVotes) => currVotes - 1);
        setHasVoted(false);
      });
    } else {
      setCommentVotes((currVotes) => currVotes - 1);
      setHasVoted(false);
      patchCommentVotes(id, -1).catch(() => {
        setCommentVotes((currVotes) => currVotes + 1);
        setHasVoted(true);
      });
    }
  };

  return (
    <MDBBtn
      className={`px-2 py-1 ${username === author ? "disabled" : ""}`}
      onClick={handleClick}
    >
      {commentVotes} <MDBIcon far icon="star" />
    </MDBBtn>
  );
};

export default CommentVotes;