import React from 'react';
import "../styles/globalComponents/Pagination.css"
import { CostumButton } from './CostumButton';

const PaginationComponent = ({ currentPage, totalRows, rowsPerPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="pagination-container">
            <CostumButton body={"Previous"} onClick={handlePrevPage} disabled={currentPage === 1}/>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <CostumButton body={"Next"} onClick={handleNextPage} disabled={currentPage === totalPages}/>
        </div>
    );
};

export default PaginationComponent;
