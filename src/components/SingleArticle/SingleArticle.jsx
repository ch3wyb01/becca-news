import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import { formatDate } from "../../utils/utils";
import ArticleVotes from "./ArticleVotes";
import CommentsList from "./Comments/CommentsList";
import ErrorMessage from "../Main/ErrorMessage";
import { MDBBadge } from "mdb-react-ui-kit";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
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
                <h2>{article.title}</h2>
                <MDBBadge color='secondary' className="mb-1">{article.topic}</MDBBadge>
                <h5>{article.author}</h5>
                <p>{formatDate(article.created_at)}</p>
                <p className="text-start">{article.body}</p>
                <ArticleVotes id={article.article_id} votes={article.votes} author={article.author}/>
              </div>
            </>
          )}
          <section id="comments">
            <CommentsList article_id={article_id} comment_count={article.comment_count}/>
          </section>
        </div>
      )}
    </main>
  );
};

export default SingleArticle;
