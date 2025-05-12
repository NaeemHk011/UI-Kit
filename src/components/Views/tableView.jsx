
import { useState, useMemo, useEffect } from 'react';
import UIKitTable from '../Table/table';

const generateStudentData = (count) => {
  const names = [
    'Ali', 'Ahmed', 'Sara', 'Fatima', 'Hassan', 'Zainab', 'Omar', 'Aisha', 'Bilal', 'Maryam',
    'Yousuf', 'Amna', 'Ibrahim', 'Khadija', 'Usman', 'Sadia', 'Hamza', 'Noor', 'Abdullah', 'Zara',
    'Saad', 'Lubna', 'Tariq', 'Hina', 'Farhan', 'Ayesha', 'Naveed', 'Sana', 'Rizwan', 'Maha'
  ];
  const grades = ['A', 'B', 'C', 'D', 'F'];
  const statuses = ['Pass', 'Fail', 'On Hold'];
  const addresses = ['123 Main St', '456 Oak Ave', '789 Pine Rd', '101 Elm St', '202 Birch Ln'];
  const emails = ['user1@example.com', 'user2@example.com', 'user3@example.com', 'user4@example.com', 'user5@example.com'];
  const phones = ['+1-123-456-7890', '+1-234-567-8901', '+1-345-678-9012', '+1-456-789-0123', '+1-567-890-1234'];

  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      Name: names[Math.floor(Math.random() * names.length)],
      RollNo: `R${1000 + i}`,
      Grade: grades[Math.floor(Math.random() * grades.length)],
      Marks: Math.floor(Math.random() * 100) + 1,
      Status: statuses[Math.floor(Math.random() * statuses.length)],
      Address: addresses[Math.floor(Math.random() * addresses.length)],
      Email: emails[Math.floor(Math.random() * emails.length)],
      Phone: phones[Math.floor(Math.random() * phones.length)],
      Extra1: `Extra${Math.floor(Math.random() * 100)}`,
      Extra2: `Note${Math.floor(Math.random() * 10)}`,
      Extra3: `Code${Math.floor(Math.random() * 1000)}`,
      Extra4: `ID${Math.floor(Math.random() * 10000)}`,
      Extra5: `Tag${Math.floor(Math.random() * 50)}`,
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
  columns = ['Name', 'RollNo', 'Grade', 'Marks', 'Status', 'Address', 'Email', 'Phone', 'Extra1', 'Extra2', 'Extra3', 'Extra4', 'Extra5'],
  data = defaultStudentData,
  headerColor = '#4B5EAA',
  rowColors = ['#ffffff', '#f9f9f9'],
  pageSize = 20,
  initialPage = 1,
  initialSort = { key: null, direction: null },
  initialSearch = '',
  enableRowSelection = false,
  editableColumns = ['Name', 'RollNo'],
  editMode = 'column', // 'row' or 'column'
  enableExport = false,
  onEditStart = null,
  onEditSave = null,
  rowHeight = 'sm', // 'sm', 'md', 'lg'
  cellPadding = 'sm', // 'sm', 'md', 'lg'
  checkboxColumns = [], // Columns with checkboxes, empty by default
  onCheckboxChange = null,
  sortIconSize = 'sm', // 'sm', 'md', 'lg'
  headerFontSize = 'sm', // 'sm', 'md', 'lg'
  enableColumnDrag = true, // Enable/disable column dragging
}) => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState(initialSort);
  const [editingRow, setEditingRow] = useState(null);
  const [editedRowData, setEditedRowData] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRows, setSelectedRows] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [columnOrder, setColumnOrder] = useState(columns);

  const normalizedRowColors = validateAndNormalizeColors(rowColors);

  // Validate checkboxColumns
  const validCheckboxColumns = useMemo(() => {
    return Array.isArray(checkboxColumns)
      ? checkboxColumns.filter((col) => columns.includes(col))
      : [];
  }, [checkboxColumns, columns]);

  // Reset checkboxStates when checkboxColumns changes
  useEffect(() => {
    setCheckboxStates({});
  }, [validCheckboxColumns]);

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
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc';
      } else if (sortConfig.direction === 'desc') {
        setSortConfig({ key: null, direction: null });
        setTableData([...tableData]);
        return;
      }
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
      columnOrder.join(','),
      ...selectedData.map((row) =>
        columnOrder.map((col) => `"${row[col] || ''}"`).join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'selected_students.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleCheckboxChange = (rowIndex, column, checked) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [rowIndex]: {
        ...prev[rowIndex],
        [column]: checked,
      },
    }));
    if (onCheckboxChange) {
      onCheckboxChange(rowIndex, column, checked);
    }
  };

  const handleDragStart = (col) => {
    setDraggingColumn(col);
  };

  const handleDragOver = (e, col) => {
    e.preventDefault();
    setDropTarget(col);
  };

  const handleDrop = (targetCol) => {
    if (draggingColumn && targetCol && draggingColumn !== targetCol) {
      const newColumnOrder = [...columnOrder];
      const sourceIndex = newColumnOrder.indexOf(draggingColumn);
      const targetIndex = newColumnOrder.indexOf(targetCol);
      newColumnOrder.splice(sourceIndex, 1);
      newColumnOrder.splice(targetIndex, 0, draggingColumn);
      setColumnOrder(newColumnOrder);

      const reorderedData = tableData.map((row) => {
        const newRow = {};
        newColumnOrder.forEach((col) => {
          newRow[col] = row[col];
        });
        return newRow;
      });
      setTableData(reorderedData);
    }
    setDraggingColumn(null);
    setDropTarget(null);
  };

  const [draggingColumn, setDraggingColumn] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);

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
    <UIKitTable
      columns={columnOrder}
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
      checkboxColumns={validCheckboxColumns}
      checkboxStates={checkboxStates}
      sortIconSize={sortIconSize}
      headerFontSize={headerFontSize}
      enableColumnDrag={enableColumnDrag}
      draggingColumn={draggingColumn}
      dropTarget={dropTarget}
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
      onCheckboxChange={handleCheckboxChange}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    />
  );
};

export default TableView;