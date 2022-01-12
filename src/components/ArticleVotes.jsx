import { useState } from "react";
import { patchArticleVotes } from "../utils/api";

const ArticleVotes = ({ id, votes }) => {
  const [articleVotes, setArticleVotes] = useState(votes);

  const handleClick = () => {
    setArticleVotes((currVotes) => currVotes + 1);
    patchArticleVotes(id).catch(() => {
        setArticleVotes((currVotes) => currVotes - 1)
    });
  };

  return <button onClick={handleClick}>{articleVotes}</button>;
};

export default ArticleVotes;
