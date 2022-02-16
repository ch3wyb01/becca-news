import { MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";

const articleLimit = 10;

const PaginationNav = ({ page, setPage, totalCount }) => {
  const totalPages = Math.ceil(totalCount / articleLimit);
  const pageNums = Array(totalPages).fill("page");

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination mb-0 mx-5 d-flex justify-content-center">
        <MDBPaginationItem
          className={`d-flex ${page === 1 ? "page-item disabled" : ""}`}
        >
          <MDBPaginationLink
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            aria-label="Previous"
          >
            <span aria-hidden="true">« Previous</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        {pageNums.map((page, i) => {
          return (
            <MDBPaginationItem>
              <MDBPaginationLink
                onClick={() => {
                  setPage(i + 1);
                }}
                aria-label={`Page ${i + 1}`}
              >
                <span aria-hidden="true">{i + 1}</span>
              </MDBPaginationLink>
            </MDBPaginationItem>
          );
        })}
        <MDBPaginationItem
          className={
            articleLimit * page >= totalCount ? "page-item disabled" : ""
          }
        >
          <MDBPaginationLink
            onClick={() => {
              setPage((currPage) => currPage + 1);
              console.log(pageNums);
            }}
            aria-label="Next"
          >
            <span aria-hidden="true">Next »</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
      </ul>
    </nav>
  );
};

export default PaginationNav;
