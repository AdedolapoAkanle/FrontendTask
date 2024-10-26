// import React, { useState } from 'react';
// import PaginationComponent from './Pagination'; 
// import "../styles/globalComponents/Table.css"
// import { FormControl, InputGroup } from 'react-bootstrap';
// import { BsCheckLg, BsXLg } from 'react-icons/bs';

// const TableComponent = ({ data, columns, title, isCollapsed}) => {
//     const [currentPage, setCurrentPage] = useState(1);

//     const rowsPerPage = 5;

//     const indexOfLastRow = currentPage * rowsPerPage;
//     const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//     const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

//     return (
//         <div className={`table-container ${isCollapsed ? 'collapsed' : ''}`} >
//             <div className='table-title'>{title}</div>
//             <InputGroup className="mb-3 table-search">
//                 <FormControl
//                     className='table-input'
//                     placeholder="Search by name"
//                     // onChange={(e) => setSearch(e.target.value)}
//                 />
//             </InputGroup>
//             <table class="table table-striped">
//                 <thead>
//                     <tr>
//                         {columns.map((column) => (
//                             <th key={column.field}>{column.header}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentRows.length > 0 ? (
//                         currentRows.map((row, index) => (
//                             <tr key={index}>
//                                 {columns.map((column) => (
//                                     <td key={column.field}>
//                                         {column.field === 'completed' ? (
//                                             row[column.field] ? (
//                                                 <span className="text-success">
//                                                     <BsCheckLg />
//                                                 </span>
//                                             ) : (
//                                                 <span className="text-danger">
//                                                     <BsXLg />
//                                                 </span>
//                                             )
//                                         ) : (
//                                             row[column.field]
//                                         )}
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan={columns.length}>No data available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
            
//             <PaginationComponent
//                 currentPage={currentPage}
//                 totalRows={data.length}
//                 rowsPerPage={rowsPerPage}
//                 setCurrentPage={setCurrentPage}
//             />
//         </div>
//     );
// };

// export default TableComponent;


import React, { useState } from 'react';
import PaginationComponent from './Pagination'; 
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import "../styles/globalComponents/Table.css"
import { FormControl, InputGroup, Modal, Button } from 'react-bootstrap';
import { CostumButton } from './CostumButton';

const TableComponent = ({ data, columns, title, isCollapsed }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const [selectedRow, setSelectedRow] = useState(null);  // For row click

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const handleRowClick = (row) => {
        setSelectedRow(row);  
    };

    return (
        <div className={`table-container ${isCollapsed ? 'collapsed' : ''} table-responsive`} >
            <div className='table-title'>{title}</div>
            <InputGroup className="mb-3 table-search">
                <FormControl
                    className='table-input'
                    placeholder="Search by name"
                />
            </InputGroup>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.field}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentRows.length > 0 ? (
                        currentRows.map((row, index) => (
                            <tr key={index} onClick={() => handleRowClick(row)} style={{cursor: 'pointer'}}>
                                {columns.map((column) => (
                                    <td key={column.field}>
                                        {row[column.field]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <PaginationComponent
                currentPage={currentPage}
                totalRows={data.length}
                rowsPerPage={rowsPerPage}
                setCurrentPage={setCurrentPage}
            />

            <Modal show={!!selectedRow} onHide={() => setSelectedRow(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedRow ? selectedRow.name : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:''}}>
                    {selectedRow && (
                        <>
                            <p><strong>ID:</strong> {selectedRow.id}</p>
                            <p><strong>Body:</strong> {selectedRow.body}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button className='modal-button' onClick={() => setSelectedRow(null)}>
                        Close
                    </Button> */}
                    <CostumButton body={"Close"} onClick={() => setSelectedRow(null)}/>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TableComponent;