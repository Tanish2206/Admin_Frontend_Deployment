import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const buttons = [];

    // Previous page button
    buttons.push(
      <Button
        key="prev"
        disabled={isFirstPage}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </Button>
    );

    // Page buttons
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <Button
          key={page}
          variant={currentPage === page ? 'solid' : 'outline'}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      );
    }

    // Next page button
    buttons.push(
      <Button
        key="next"
        disabled={isLastPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
    );

    return buttons;
  };

  return <ButtonGroup>{renderPageButtons()}</ButtonGroup>;
};

export default Pagination;
