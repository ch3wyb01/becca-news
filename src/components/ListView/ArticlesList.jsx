import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import DropDown from "./DropDown";
import ErrorMessage from "../Main/ErrorMessage";
import PaginationNav from "./PaginationNav";

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
      .catch(() => {
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
          <PaginationNav page={page} setPage={setPage} totalCount={totalCount}/>
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
              />
            );
          })}
          <PaginationNav page={page} setPage={setPage} totalCount={totalCount} sortValue={sortValue}/>
        </main>
      )}
    </div>
  );
};

export default ArticlesList;
