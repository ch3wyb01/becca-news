import { Link } from "react-router-dom";

const ArticleCard = ({
  id,
  title,
  body,
  topic,
  votes,
  author,
  comment_count,
  showTopic,
}) => {
  return (
    <Link to={`/articles/${id}`}>
      <div>
        <h2>{title}</h2>
        {!showTopic && <p>{topic}</p>}
      </div>
    </Link>
  );
};

export default ArticleCard;
