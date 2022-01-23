import { useState } from "react/cjs/react.development";
import { postComment } from "../utils/api";
import { MDBCard, MDBBtn } from "mdb-react-ui-kit";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ article_id, loadComments }) => {
  const [comment, setComment] = useState("");
  const { username } = useContext(UserContext);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    const body = event.target[0].value;
    postComment(article_id, username, body).then(() => {
      setComment("");
      loadComments();
    });
  };

  return (
    <MDBCard className="shadow px-5 py-4 mt-4 mx-2">
      <form onSubmit={addComment} className="d-flex flex-column">
        <textarea
          onChange={handleChange}
          name="body"
          cols="20"
          rows="5"
          value={comment}
        ></textarea>
        <MDBBtn className="align-self-center mt-3 px-2" type="submit">
          Add comment
        </MDBBtn>
      </form>
    </MDBCard>
  );
};

export default AddComment;
