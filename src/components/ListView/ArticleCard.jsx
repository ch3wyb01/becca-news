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
  hideTopic,
  hideAuthor,
}) => {
  return (
    <MDBCard className="shadow my-4 mx-auto px-2">
      <MDBCardBody>
        <MDBCardTitle tag="h4" className="mb-1">
          {title}
        </MDBCardTitle>
        {!hideAuthor && <MDBCardSubTitle tag="h6">By {author}</MDBCardSubTitle>}
        <MDBCardSubTitle>{formatDate(created_at)}</MDBCardSubTitle>
        <div
          className={`d-flex ${
            hideTopic ? "justify-content-end" : "justify-content-between"
          } px-4`}
        >
          {!hideTopic && (
            <MDBBadge color="secondary" className="mb-1">
              {topic}
            </MDBBadge>
          )}
          <div className="d-flex">
            <MDBCardSubTitle className="mx-2">
              {votes} <MDBIcon far icon="star" />
            </MDBCardSubTitle>
            <MDBCardSubTitle>
              {comment_count} <MDBIcon far icon="comments" />
            </MDBCardSubTitle>
          </div>
        </div>
        <a href={`/articles/${id}`} className="stretched-link"></a>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ArticleCard;
