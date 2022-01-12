import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
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
        <p>Loading...</p>
      ) : (
        <div>
          {article && (
            <>
              <div>
                <h2>{article.title}</h2>
                <h3>{article.topic}</h3>
                <h4>{article.author}</h4>
                <p>{article.body}</p>
                <ArticleVotes id={article.article_id} votes={article.votes} />
              </div>
              <div>
                <h3>{article.comment_count}</h3>
              </div>
            </>
          )}

          <section id="comments">
            <CommentsList article_id={article_id} />
          </section>
        </div>
      )}
    </main>
  );
};

export default SingleArticle;
