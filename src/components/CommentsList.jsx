import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  });

  return (
    <section>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment}/>;
      })}
    </section>
  );
};

export default CommentsList;
