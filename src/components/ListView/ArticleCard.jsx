import { formatDate } from "../../utils/utils";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBBadge,
  MDBIcon,
} from "mdb-react-ui-kit";

const ArticleCard = ({
  id,
  title,
  topic,
  created_at,
  votes,
  author,
  comment_count,
  hideAuthor,
}) => {
  return (
    <MDBCard className="shadow my-4 px-2">
      <MDBCardBody>
        <MDBCardTitle tag="h4" className="mb-2">
          {title}
        </MDBCardTitle>
        {!hideAuthor && (
          <MDBCardSubTitle tag="h6" className="mb-2">
            <MDBIcon fas icon="user" /> {author}
          </MDBCardSubTitle>
        )}
        <MDBCardSubTitle className="mb-3">
          {formatDate(created_at)}
        </MDBCardSubTitle>
        <div className="d-flex justify-content-between px-4">
          <MDBBadge color="secondary" className="mb-1">
            {topic}
          </MDBBadge>
          <div className="d-flex">
            <MDBCardSubTitle className="mx-2 text-secondary">
              <MDBIcon far icon="star" /> {votes}
            </MDBCardSubTitle>
            <MDBCardSubTitle className="mx-2 text-secondary">
              <MDBIcon far icon="comments" /> {comment_count}
            </MDBCardSubTitle>
          </div>
        </div>
        <a href={`/articles/${id}`} className="stretched-link"></a>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ArticleCard;
