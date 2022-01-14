import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { formatDate } from "../utils/utils";
import ArticleVotes from "./ArticleVotes";
import CommentsList from "./CommentsList";
import ErrorMessage from "./ErrorMessage";

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
        <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      ) : (
        <div>
          {article && (
            <>
              <div>
                <h2>{article.title}</h2>
                <h3>{article.topic}</h3>
                <h5>{article.author}</h5>
                <p>{formatDate(article.created_at)}</p>
                <p>{article.body}</p>
                <ArticleVotes id={article.article_id} votes={article.votes} />
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
