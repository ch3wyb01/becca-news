import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

const CommentsList = ({ article_id, comment_count }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <AddComment article_id={article_id} setComments={setComments} comments={comments}/>
          <MDBCard className="shadow my-4 mx-2 px-2 pt-4">
            <h4>Recent comments</h4>
            <h5>{comment_count} comments</h5>
            <MDBCardBody>
              {comments.map((comment) => {
                return (
                  <CommentCard
                    key={comment.comment_id}
                    comment={comment}
                    setComments={setComments}
                    comments={comments}
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
