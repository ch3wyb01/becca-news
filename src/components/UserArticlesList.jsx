import { useState, useEffect } from "react";
import { getUserArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const UserArticlesList = ({ username }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getUserArticles(username).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <div>
      <h3>Authored Articles</h3>
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
            hideAuthor={username}
          />
        );
      })}
    </div>
  );
};

export default UserArticlesList;
