const ArticleCard = ({ title, body, topic, votes, author, comment_count }) => {
  return (
    <div>
      <article>
        <h2>{title}</h2>
        <p>{topic}</p>
        <p>{body}</p>
      </article>
    </div>
  );
};

export default ArticleCard;
