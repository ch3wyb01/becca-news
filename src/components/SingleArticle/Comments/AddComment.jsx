import { useState } from "react";
import { postComment } from "../../../utils/api";
import { MDBCard, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const AddComment = ({ article_id, setComments, comments }) => {
  const [newComment, setNewComment] = useState("");
  const { username } = useContext(UserContext);
  const [isEmptyComment, setIsEmptyComment] = useState(undefined);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    const body = event.target[0].value;
    if (!body) {
      setIsEmptyComment(true);
    } else {
      setIsEmptyComment(false);
      setNewComment("");
      postComment(article_id, username, body)
        .then((commentFromApi) => {
          setComments([commentFromApi, ...comments]);
        })
        .catch(() => {
          setComments(comments);
        });
    }
  };

  return (
    <MDBCard className="shadow px-5 py-4 mt-4 mx-2">
      <form onSubmit={addComment} className="d-flex flex-column">
        <MDBInput
          label="Comment"
          textarea
          rows={5}
          onChange={handleChange}
          value={newComment}
        />
        {isEmptyComment ? <p>Comment cannot be empty</p> : null}
        <MDBBtn className="align-self-center mt-3 px-2" type="submit">
          Add comment
        </MDBBtn>
      </form>
    </MDBCard>
  );
};

export default AddComment;
