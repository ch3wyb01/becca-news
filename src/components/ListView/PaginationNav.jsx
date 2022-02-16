import {
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

const articleLimit = 10;

const PaginationNav = ({ page, setPage, totalCount }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination mb-0 mx-5 d-flex justify-content-between">
        <li className={`d-flex ${page === 1 ? "page-item disabled" : ""}`}>
          <MDBPaginationItem>
            <MDBPaginationLink
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              aria-label="Previous"
            >
              <span aria-hidden="true">« Previous</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
        </li>
        <li
          className={
            articleLimit * page >= totalCount ? "page-item disabled" : ""
          }
        >
        <MDBPaginationItem>
          <MDBPaginationLink
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
            aria-label="Next"
          >
            <span aria-hidden="true">Next »</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationNav;
