import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserTable.css';
import SearchComponent from 'host/SearchComponent';

const Grievance = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://poc02.kshema.co/grievance/v1.1/dashboard?offset=0&limit=50&name=-1&mobileno=-1&grievance_id=-1&policyno=-1&spoc=-1&claimno=-1&referenceno=-1&mode_id=-1&status=-1&department_id=-1&lineOfBussiness=-1&request_type_id=-1&source_id=-1&type_id=-1&createdAt=-1&dateOfClosure=-1',
          {
            headers: {
              requester: 'Nagaraju',
            },
          }
        );
        setData(response.data.data.grievanceDashBoardResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Update the filteredData state whenever the data state changes
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Export data to CSV, Excel, or PDF
  const exportToCsv = () => {
    // Implement CSV export logic here
  };

  const exportToExcel = () => {
    // Implement Excel export logic here
  };

  const exportToPdf = () => {
    // Implement PDF export logic here
  };
  // Render the table
  return (
    <>
      <SearchComponent data={data} onSearch={setFilteredData} />
      <div className="table-container">
   
        {/* <div className="export-buttons">
          <button onClick={exportToCsv}>Export to CSV</button>
          <button onClick={exportToExcel}>Export to Excel</button>
          <button onClick={exportToPdf}>Export to PDF</button>
        </div> */}
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Grievance ID</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Created At</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{item.grievanceId}</td>
                <td>{item.name}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.createdAt}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            {'<<'}
          </button>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            {'<'}
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
            {'>'}
          </button>
          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
            {'>>'}
          </button>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              value={currentPage}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) : 1;
                setCurrentPage(Math.max(1, Math.min(page, totalPages)));
              }}
              style={{ width: '50px' }}
            />
          </span>
          <span>
            | Items per page:{' '}
            <select
              value={itemsPerPage}
              onChange={e => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[10, 20, 30, 40, 50].map(size => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    </>
  );
};

export default Grievance;

