import { useState } from "react";
import { patchArticleVotes } from "../utils/api";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const ArticleVotes = ({ id, votes }) => {
  const [articleVotes, setArticleVotes] = useState(votes);

  const handleClick = () => {
    setArticleVotes((currVotes) => currVotes + 1);
    patchArticleVotes(id).catch(() => {
        setArticleVotes((currVotes) => currVotes - 1)
    });
  };

  return <MDBBtn className="px-2 py-1" onClick={handleClick}>{articleVotes} <MDBIcon far icon="star" /></MDBBtn>;
};

export default ArticleVotes;
