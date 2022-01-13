import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadComments = () => {
    setIsLoading(true);
    getCommentsByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <AddComment article_id={article_id} loadComments={loadComments}/>
          <section>
            {comments.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment} loadComments={loadComments}/>;
            })}
          </section>
        </div>
      )}
    </main>
  );
};

export default CommentsList;
