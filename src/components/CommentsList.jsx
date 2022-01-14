import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import { orderComments } from "../utils/utils";
import { MDBCard, MDBCardBody, MDBCardHeader } from "mdb-react-ui-kit";

const CommentsList = ({ article_id, comment_count }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadComments = () => {
    setIsLoading(true);
    getCommentsByArticleId(article_id).then((commentsFromApi) => {
      const latestComments = orderComments(commentsFromApi);
      setComments(latestComments);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <main>
      {isLoading ? (
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <AddComment article_id={article_id} loadComments={loadComments} />
          <MDBCard className="shadow my-4 mx-2 px-2 pt-4">
              <h4>Recent comments</h4>
              <h5>{comment_count} comments</h5>
            <MDBCardBody>
              {comments.map((comment) => {
                return (
                  <CommentCard
                    key={comment.comment_id}
                    comment={comment}
                    loadComments={loadComments}
                  />
                );
              })}
            </MDBCardBody>
          </MDBCard>
        </div>
      )}
    </main>
  );
};

export default CommentsList;
