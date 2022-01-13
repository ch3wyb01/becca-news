import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import DropDown from "./DropDown";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortValue, setSortValue] = useState('created_at');

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortValue).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic, sortValue]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main>
          <h1>{topic ? `${topic} articles` : "All articles"}</h1>
          <DropDown sortValue={sortValue} setSortValue={setSortValue}/>
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
