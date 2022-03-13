import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import { formatDate } from "../../utils/utils";
import ArticleVotes from "./ArticleVotes";
import CommentsList from "./Comments/CommentsList";
import ErrorMessage from "../Main/ErrorMessage";
import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setVoters(articleFromApi.voted_by);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  }, [article_id]);

  if (error) return <ErrorMessage message={error} />;

  return (
    <main>
      {isLoading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          {article && (
            <>
              <div>
                <MDBBadge color="secondary" className="mb-3">
                  {article.topic}
                </MDBBadge>
                <h2 className="mb-3">{article.title}</h2>
                <div className="d-flex justify-content-center mb-3 px-2 mx-3">
                  <h6 className="px-3">
                    <MDBIcon fas icon="user" className="pe-2"/> {article.author}
                  </h6>
                  <h6 className="px-3">{formatDate(article.created_at)}</h6>
                </div>
                <p className="text-start px-2 mx-2">{article.body}</p>
                <ArticleVotes
                  id={article.article_id}
                  votes={article.votes}
                  author={article.author}
                  voters={voters}
                />
              </div>
            </>
          )}
          <section id="comments">
            <CommentsList
              article_id={article_id}
              comment_count={article.comment_count}
            />
          </section>
        </div>
      )}
    </main>
  );
};

export default SingleArticle;
