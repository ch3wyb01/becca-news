import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import DropDown from "./DropDown";
import ErrorMessage from "./ErrorMessage";

const articleLimit = 10;

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortValue, setSortValue] = useState("created_at");
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortValue, page)
      .then(({ articles, total }) => {
        setArticles(articles);
        setTotalCount(total);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("That topic doesn't exist");
      });
  }, [topic, sortValue, page]);

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <main>
          <h1>{topic ? `${topic} articles` : "All articles"}</h1>
          <DropDown sortValue={sortValue} setSortValue={setSortValue} />
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                id={article.article_id}
                title={article.title}
                author={article.author}
                created_at={article.created_at}
                votes={article.votes}
                comment_count={article.comment_count}
                topic={article.topic}
                hideTopic={topic}
              />
            );
          })}
          <button
            disabled={page === 1}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </button>
          <button
            disabled={articleLimit * page >= totalCount}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        </main>
      )}
    </div>
  );
};

export default ArticlesList;
