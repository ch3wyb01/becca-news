import { useState, useEffect } from "react";
import { getUserArticles, getUserVotedArticles } from "../../utils/api";
import ArticleCard from "../ListView/ArticleCard";

const UserArticlesList = ({ username, isAuthor }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    isAuthor
      ? getUserArticles(username).then((articlesFromApi) => {
          setArticles(articlesFromApi);
        })
      : getUserVotedArticles(username).then((articlesFromApi) => {
          setArticles(articlesFromApi);
        });
  }, []);

  return (
    <div>
      <h3 id="profile-list">{isAuthor ? "Authored Articles" : "Voted Articles"}</h3>
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
            hideAuthor={isAuthor}
          />
        );
      })}
    </div>
  );
};

export default UserArticlesList;
