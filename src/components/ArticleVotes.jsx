import { useState } from "react";
import { patchArticleVotes } from "../utils/api";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const ArticleVotes = ({ id, votes, author }) => {
  const [articleVotes, setArticleVotes] = useState(votes);
  const [hasVoted, setHasVoted] = useState(false);

  const { username } = useContext(UserContext);

  const handleClick = () => {
    if (!hasVoted) {
      setArticleVotes((currVotes) => currVotes + 1);
      setHasVoted(true);
      patchArticleVotes(id, 1).catch(() => {
        setArticleVotes((currVotes) => currVotes - 1);
        setHasVoted(false);
      });
    } else {
      setArticleVotes((currVotes) => currVotes - 1);
      setHasVoted(false);
      patchArticleVotes(id, -1).catch(() => {
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
