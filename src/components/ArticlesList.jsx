import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <main>
      <h1>Articles</h1>
      {articles.map((article) => {
        return (
          <ArticleCard
            key={article.article_id}
            title={article.title}
            body={article.body}
          />
        );
      })}
    </main>
  );
};

export default ArticlesList;
