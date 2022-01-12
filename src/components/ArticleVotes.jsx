import { useEffect, useState } from "react";
import { patchArticleVotes } from "../utils/api";

const ArticleVotes = ({ id, votes, title}) => {
  const [articleVotes, setArticleVotes] = useState(votes);

  const handleClick = () => {
    setArticleVotes((currVotes) => currVotes + 1);
    // patchArticleVotes(id);
  };

  return <button onClick={handleClick}>{articleVotes}</button>;
};

export default ArticleVotes;
