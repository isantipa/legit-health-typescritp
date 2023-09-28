import React from 'react';

interface PaginationProps {
  currentPage: number;
  changePage: (page: number) => void;
  totalPages: number;
}

// The Pagination component displays buttons for navigating between pages
const Pagination: React.FC<PaginationProps> = ({ currentPage, changePage, totalPages }) => {
  return (
    <div>
      {currentPage > 1 && <button onClick={() => changePage(currentPage - 1)}>Previous</button>}
      {currentPage < totalPages && <button onClick={() => changePage(currentPage + 1)}>Next</button>}
    </div>
  );
}

export default Pagination;