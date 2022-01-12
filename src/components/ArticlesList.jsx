import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main>
          <h1>{topic ? `${topic} articles` : "All articles"}</h1>
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                id={article.article_id}
                title={article.title}
                body={article.body}
                topic={article.topic}
                showTopic={topic}
              />
            );
          })}
        </main>
      )}
    </div>
  );
};

export default ArticlesList;
