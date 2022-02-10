import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import DropDown from "./DropDown";
import ErrorMessage from "./ErrorMessage";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortValue, setSortValue] = useState("created_at");
  const [error, setError] = useState(null);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortValue).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    })
    .catch((err) => {
      setError("That topic doesn't exist");
    });
  }, [topic, sortValue]);

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      {isLoading ? (
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
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
        </main>
      )}
    </div>
  );
};

export default ArticlesList;
