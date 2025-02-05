import React from "react";
import "../styles.css";

const Pagination = ({ page, totalPages, setPage }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
      <span> Page {page} of {totalPages} </span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
