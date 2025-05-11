import { useState, useMemo } from 'react';
import UIKitTable from '../Table/table';

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

const defaultStudentData = generateStudentData(1000);

const validateAndNormalizeColors = (colors) => {
  const hexRegex = /^(#?[0-9A-Fa-f]{6})$/;
  if (!Array.isArray(colors) || colors.length < 1 || colors.length > 2) {
    return ['#ffffff', '#f9f9f9'];
  }

  const normalized = colors.map((color) => {
    if (typeof color !== 'string') return '#ffffff';
    const trimmed = color.trim();
    const hasHash = trimmed.startsWith('#');
    const cleanColor = hasHash ? trimmed : `#${trimmed}`;
    return hexRegex.test(cleanColor) ? cleanColor : '#ffffff';
  });

  return normalized.length === 1 ? [normalized[0]] : normalized;
};

const TableView = ({
  columns = ['Name', 'RollNo', 'Grade', 'Marks', 'Status'],
  data = defaultStudentData,
  headerColor = '#4B5EAA',
  rowColors = ['#ffffff', '#f9f9f9'],
  pageSize = 20,
  initialPage = 1,
  initialSort = { key: null, direction: null },
  initialSearch = '',
  enableRowSelection = false,
  editableColumns = ['Name', 'RollNo'],
  editMode = 'column',
  enableExport = false,
  onEditStart = null,
  onEditSave = null,
  rowHeight = 'sm',
  cellPadding = 'sm'
}) => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState(initialSort);
  const [editingRow, setEditingRow] = useState(null);
  const [editedRowData, setEditedRowData] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedTableProps, setSelectedTableProps] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const normalizedRowColors = validateAndNormalizeColors(rowColors);

  const tableProps = {
    columns: JSON.stringify(columns),
    headerColor,
    rowColors: JSON.stringify(normalizedRowColors),
    pageSize,
    enableRowSelection,
    editableColumns: JSON.stringify(editableColumns),
    editMode,
    enableExport,
    rowHeight,
    cellPadding
  };

  const filteredData = useMemo(() => {
    return tableData.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [tableData, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      let valA = a[key]?.toString().replace('$', '') || '';
      let valB = b[key]?.toString().replace('$', '') || '';
      const isNumeric = !isNaN(valA) && !isNaN(valB);

      if (isNumeric) {
        return direction === 'asc'
          ? parseFloat(valA) - parseFloat(valB)
          : parseFloat(valB) - parseFloat(valA);
      }
      return direction === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });
    setTableData((prev) => {
      const newData = [...prev];
      const startIndex = (currentPage - 1) * pageSize;
      sortedData.forEach((item, idx) => {
        newData[startIndex + idx] = item;
      });
      return newData;
    });
  };

  const handleEditStart = (rowIndex) => {
    const rowData = filteredData[rowIndex];
    setEditingRow(rowIndex);
    setEditedRowData({ ...rowData });
    if (onEditStart) {
      const editableFields = editMode === 'row' ? columns : editableColumns;
      onEditStart(rowIndex, editableFields);
    }
  };

  const handleEditChange = (field, value) => {
    setEditedRowData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (editingRow !== null) {
      const updatedRow = { ...filteredData[editingRow], ...editedRowData };
      setTableData((prev) =>
        prev.map((item, idx) =>
          idx === editingRow ? updatedRow : item
        )
      );
      setShowConfirmation(true);
      if (onEditSave) {
        onEditSave(updatedRow);
      }
    }
    setEditingRow(null);
    setEditedRowData({});
  };

  const handleCancel = () => {
    setEditingRow(null);
    setEditedRowData({});
    setShowConfirmation(true);
  };

  const handleConfirmAction = (action) => {
    if (action === 'save') {
      handleSave();
    } else {
      handleCancel();
    }
    setShowConfirmation(false);
  };

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

  const handleRowSelection = (rowIndex) => {
    setSelectedRows((prev) =>
      prev.includes(rowIndex)
        ? prev.filter((idx) => idx !== rowIndex)
        : [...prev, rowIndex]
    );
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      const pageIndices = filteredData
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
        .map((_, idx) => (currentPage - 1) * pageSize + idx);
      setSelectedRows(pageIndices);
    } else {
      setSelectedRows([]);
    }
  };

  const handleExport = () => {
    const selectedData = selectedRows.map((idx) => filteredData[idx]);
    const csvContent = [
      columns.join(','),
      ...selectedData.map((row) =>
        columns.map((col) => `"${row[col] || ''}"`).join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'selected_students.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleShowTableProps = () => {
    setSelectedTableProps(tableProps);
  };

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };

  const handleCopyProps = () => {
    if (selectedTableProps) {
      const propsString = `<UIKitTable ${Object.entries(selectedTableProps)
        .map(([key, value]) => `${key}={${value}}`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const handleCopyRow = () => {
    if (selectedRow) {
      navigator.clipboard.writeText(JSON.stringify(selectedRow, null, 2));
    }
  };

  const closeModal = () => {
    setSelectedTableProps(null);
    setSelectedRow(null);
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

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="p-6 space-y-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-[#4B5EAA]">Student Records Table</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleShowTableProps}
        >
          Show Table Props
        </button>
      </div>
      <UIKitTable
        columns={columns}
        data={paginatedData}
        headerColor={headerColor}
        rowColors={normalizedRowColors}
        sortConfig={sortConfig}
        editingRow={editingRow}
        editedRowData={editedRowData}
        showConfirmation={showConfirmation}
        currentPage={currentPage}
        totalPages={totalPages}
        visiblePages={visiblePages}
        searchQuery={searchQuery}
        enableRowSelection={enableRowSelection}
        selectedRows={selectedRows}
        editableColumns={editableColumns}
        editMode={editMode}
        enableExport={enableExport}
        rowHeight={rowHeight}
        cellPadding={cellPadding}
        onSort={handleSort}
        onEditStart={handleEditStart}
        onEditChange={handleEditChange}
        onSave={handleSave}
        onCancel={handleCancel}
        onConfirmAction={handleConfirmAction}
        onPageChange={handlePageChange}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSearch={(query) => setSearchQuery(query)}
        onRowSelection={handleRowSelection}
        onSelectAll={handleSelectAll}
        onExport={handleExport}
        onRowClick={handleRowClick}
      />

      {selectedTableProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Table Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitTable ${Object.entries(selectedTableProps)
                .map(([key, value]) => `${key}={${value}}`)
                .join(' ')} />`}
            </pre>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCopyProps}
              >
                Copy Code
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
                onClick={handleCopyRow}
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

export default TableView;