import { useEffect } from "react";

const articleLimit = 10;

const PaginationNav = ({page, setPage, totalCount}) => {
  useEffect(() => {}, [page]);

  return (
    <div>
      <button
        disabled={page === 1}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Previous
      </button>
      <button
        disabled={articleLimit * page >= totalCount}
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationNav;
