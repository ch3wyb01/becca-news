import { MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";

const articleLimit = 10;

const PaginationNav = ({ page, setPage, totalCount }) => {
  const totalPages = Math.ceil(totalCount / articleLimit);
  const pageNums = Array(totalPages).fill("page");

  return (
    <nav aria-label="Page navigation" className="mt-3 mb-0">
      <ul className="pagination d-flex justify-content-center me-4">
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
        {pageNums.map((p, i) => {
          return (
            <MDBPaginationItem className={`pagination-circle ${i + 1 === page ? "page-item active" : ""}`}>
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
