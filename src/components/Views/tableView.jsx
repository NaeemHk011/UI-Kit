import React, { useState, useMemo } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { UIKitTable } from '../Table/table';


const generateStudentData = (count) => {
  const names = [
    'Ali', 'Ahmed', 'Sara', 'Fatima', 'Hassan', 'Zainab', 'Omar', 'Aisha', 'Bilal', 'Maryam',
    'Yousuf', 'Amna', 'Ibrahim', 'Khadija', 'Usman', 'Sadia', 'Hamza', 'Noor', 'Abdullah', 'Zara',
    'Saad', 'Lubna', 'Tariq', 'Hina', 'Farhan', 'Ayesha', 'Naveed', 'Sana', 'Rizwan', 'Maha'
  ];
  const grades = ['A', 'B', 'C', 'D', 'F'];
  const statuses = ['Pass', 'Fail', 'On Hold'];

  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      Name: names[Math.floor(Math.random() * names.length)],
      RollNo: `R${1000 + i}`,
      Grade: grades[Math.floor(Math.random() * grades.length)],
      Marks: Math.floor(Math.random() * 100) + 1,
      Status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return data;
};

const studentData = generateStudentData(1000);

export const TableView = () => {
  const columns = ['Name', 'RollNo', 'Grade', 'Marks', 'Status'];
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const pageSize = 20;

  
  const filteredData = useMemo(() => {
    return studentData.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const maxVisiblePages = 5;
  const halfVisible = Math.floor(maxVisiblePages / 2);
  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  // Paginate ..
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // row click
  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };

  const handleCopy = () => {
    if (selectedRow) {
      navigator.clipboard.writeText(JSON.stringify(selectedRow, null, 2));
    }
  };

  const closeModal = () => {
    setSelectedRow(null);
  };

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-3xl font-bold text-[#4B5EAA] text-center">Student Records Table</h2>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-center text-gray-700">Primary Student Table</h3>
        <div className="relative">
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border rounded w-64"
              placeholder="Search table..."
            />
          </div>
          <UIKitTable
            columns={columns}
            data={paginatedData}
            headerColor="#4B5EAA"
            showSortIcons={true}
            onRowClick={handleRowClick}
          />
          <div className="flex justify-center items-center mt-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
              >
                <FaArrowLeft className="text-gray-600" />
              </button>
              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === page
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-blue-500 text-blue-500'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
              >
                <FaArrowRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedRow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Row Data</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {JSON.stringify(selectedRow, null, 2)}
            </pre>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCopy}
              >
                Copy
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};