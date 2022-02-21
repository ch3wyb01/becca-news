import { useState } from "react";
import {
  deleteArticleVote,
  postArticleVote,
} from "../../utils/api";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const ArticleVotes = ({ id, votes, voters, author }) => {
  const { username } = useContext(UserContext);
  const [articleVotes, setArticleVotes] = useState(votes);
  const [hasVoted, setHasVoted] = useState(voters.includes(username));

  const handleClick = () => {
    if (!hasVoted) {
      setArticleVotes((currVotes) => currVotes + 1);
      setHasVoted(true);
      postArticleVote(username, id).catch(() => {
        setArticleVotes((currVotes) => currVotes - 1);
        setHasVoted(false);
      });
    } else {
      setArticleVotes((currVotes) => currVotes - 1);
      setHasVoted(false);
      deleteArticleVote(username, id).catch(() => {
        setArticleVotes((currVotes) => currVotes + 1);
        setHasVoted(true);
      });
    }
  };

  return (
    <MDBBtn
      className={`px-2 py-1 ${username === author ? "disabled" : ""}`}
      onClick={handleClick}
    >
      {articleVotes} <MDBIcon far icon="star" />
    </MDBBtn>
  );
};

export default ArticleVotes;
