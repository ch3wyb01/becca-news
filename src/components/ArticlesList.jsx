import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  const {topic} = useParams();

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic]);

  return (
    <main>
      <h1>Articles</h1>
      {articles.map((article) => {
        return (
          <ArticleCard
            key={article.article_id}
            title={article.title}
            body={article.body}
            topic={article.topic}
          />
        );
      })}
    </main>
  );
};

export default ArticlesList;
