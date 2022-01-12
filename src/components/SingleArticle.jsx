import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import ArticleVotes from "./ArticleVotes";
import CommentsList from "./CommentsList";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState(undefined);
 
  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, []);

  return (
    <main>
      {article && 
      <>
      <div>
        <h2>{article.title}</h2>
        <h3>{article.topics}</h3>
        <h4>{article.author}</h4>
        <p>{article.body}</p>
        <ArticleVotes id={article.article_id} votes={article.votes} title={article.title}/>
      </div>
      <div>
        <h3>{article.comment_count}</h3>
      </div>
      </>}
      <section>
        <CommentsList article_id={article_id} />
      </section>
    </main>
  );
};

export default SingleArticle;
