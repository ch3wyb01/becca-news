import { useState } from "react/cjs/react.development";
import { postComment } from "../utils/api";

const AddComment = ({ article_id, loadComments}) => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    const body = event.target[0].value;
    postComment(article_id, body).then(() => {
      setComment("");
      loadComments();
    });
  };

  return (
    <div>
      <form onSubmit={addComment}>
        <textarea
          onChange={handleChange}
          name="body"
          cols="20"
          rows="5"
          value={comment}
        ></textarea>
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
};

export default AddComment;
