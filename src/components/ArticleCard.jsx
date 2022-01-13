import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";

const ArticleCard = ({
  id,
  title,
  topic,
  created_at,
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
        <p>{formatDate(created_at)}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
