
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
  const descriptions = [
    'Good student with excellent grades',
    'Needs improvement in math',
    'Very active in class activities',
    'Consistent performer',
    'Requires attention in studies'
  ];

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
      Description: descriptions[Math.floor(Math.random() * descriptions.length)]
    });
  }
  return data;
};

const defaultStudentData = generateStudentData(1000);

const validateAndNormalizeColors = (colors) => {
  if (!Array.isArray(colors) || colors.length < 1 || colors.length > 2) {
    return ['#ffffff', '#f9f9f9'];
  }
  return colors.map((color) => (typeof color === 'string' ? color.trim().startsWith('#') ? color : `#${color}` : '#ffffff'));
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
  editableColumns = ['Name', 'RollNo', 'Description'],
  editMode = 'column',
  enableExport = false,
  onEditStart = null,
  onEditSave = null,
  rowHeight = 'sm',
  cellPadding = 'sm',
  checkboxColumns = [],
  onCheckboxChange = null,
  sortIconSize = 'sm',
  headerFontSize = 'sm',
  enableColumnDrag = true,
  enableScrollbar = true,
  includeDescription = true,
  maxDescriptionLength = null,
  modalConfig = {
    title: 'Confirm Action',
    message: 'Do you want to save or discard your changes?',
    saveButtonText: 'Confirm Save',
    discardButtonText: 'Confirm Discard'
  },
  descriptionWidth = 250,
  forceFixedRowHeight = true,
}) => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState(initialSort);
  const [editingRow, setEditingRow] = useState(null);
  const [editedRowData, setEditedRowData] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingEdit, setPendingEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRows, setSelectedRows] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [draggingColumn, setDraggingColumn] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);

  // Debugging: Log props
  console.log('includeDescription prop:', includeDescription);
  console.log('Initial columns prop:', columns);
  console.log('modalConfig prop:', modalConfig);
  console.log('descriptionWidth prop:', descriptionWidth);

  // Compute columnOrder using useMemo
  const columnOrder = useMemo(() => {
    console.log('useMemo for columnOrder running...');
    console.log('includeDescription in useMemo:', includeDescription);
    let baseOrder = [...columns];
    if (includeDescription && !baseOrder.includes('Description')) {
      console.log('Adding Description to columnOrder');
      baseOrder.push('Description');
    } else if (!includeDescription && baseOrder.includes('Description')) {
      console.log('Removing Description from columnOrder');
      baseOrder = baseOrder.filter((col) => col !== 'Description');
    }
    console.log('Computed columnOrder:', baseOrder);
    return baseOrder;
  }, [columns, includeDescription]);

  const normalizedRowColors = validateAndNormalizeColors(rowColors);

  const validCheckboxColumns = useMemo(() => {
    return Array.isArray(checkboxColumns)
      ? checkboxColumns.filter((col) => columnOrder.includes(col))
      : [];
  }, [checkboxColumns, columnOrder]);

  useEffect(() => {
    if (checkboxColumns.length > 0) {
      setCheckboxStates({});
    }
  }, [checkboxColumns]);

  const filteredData = useMemo(() => {
    return tableData.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [tableData, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  // Compute paginatedData for the current page
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, pageSize]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction) {
      direction = sortConfig.direction === 'asc' ? 'desc' : null;
    }
    setSortConfig({ key, direction: direction || null });

    const sortedData = [...filteredData].sort((a, b) => {
      let valA = a[key]?.toString().replace('$', '') || '';
      let valB = b[key]?.toString().replace('$', '') || '';
      const isNumeric = !isNaN(valA) && !isNaN(valB);
      if (isNumeric) {
        return direction === 'asc' ? parseFloat(valA) - parseFloat(valB) : parseFloat(valB) - parseFloat(valA);
      }
      return direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
    setTableData(sortedData);
  };

  const handleEditStart = (rowIndex) => {
    const rowData = paginatedData[rowIndex];
    setEditingRow(rowIndex);
    setEditedRowData({ ...rowData });
    if (onEditStart) {
      const editableFields = editMode === 'row' ? columnOrder : [...editableColumns, ...(includeDescription ? ['Description'] : [])];
      onEditStart(rowIndex, editableFields);
    }
  };

  const handleEditChange = (field, value) => {
    let trimmedValue = value;
    if (field === 'Description' && maxDescriptionLength && value.length > maxDescriptionLength) {
      trimmedValue = value.slice(0, maxDescriptionLength);
    }
    setEditedRowData((prev) => ({ ...prev, [field]: trimmedValue }));
  };

  const handleSave = () => {
    if (editingRow !== null) {
      const updatedRow = { ...paginatedData[editingRow], ...editedRowData };
      setPendingEdit({ rowIndex: (currentPage - 1) * pageSize + editingRow, updatedRow });
      setShowConfirmation(true);
    }
  };

  const handleCancel = () => {
    setShowConfirmation(true);
    setPendingEdit(null);
  };

  const handleConfirmAction = (action) => {
    if (action === 'save' && pendingEdit) {
      setTableData((prev) =>
        prev.map((item, idx) => (idx === pendingEdit.rowIndex ? pendingEdit.updatedRow : item))
      );
      if (onEditSave) onEditSave(pendingEdit.updatedRow);
    }
    setEditingRow(null);
    setEditedRowData({});
    setPendingEdit(null);
    setShowConfirmation(false);
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const handleNext = () => (currentPage < totalPages ? setCurrentPage(currentPage + 1) : null);
  const handlePrevious = () => (currentPage > 1 ? setCurrentPage(currentPage - 1) : null);

  const handleRowSelection = (rowIndex) =>
    setSelectedRows((prev) =>
      prev.includes(rowIndex) ? prev.filter((idx) => idx !== rowIndex) : [...prev, rowIndex]
    );

  const handleSelectAll = (checked) => {
    if (checked) {
      const pageIndices = paginatedData.map((_, idx) => idx);
      setSelectedRows(pageIndices);
    } else setSelectedRows([]);
  };

  const handleExport = () => {
    const selectedData = selectedRows.map((idx) => filteredData[(currentPage - 1) * pageSize + idx]);
    const csvContent = [
      columnOrder.join(','),
      ...selectedData.map((row) => columnOrder.map((col) => `"${row[col] || ''}"`).join(',')),
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
      [rowIndex]: { ...prev[rowIndex], [column]: checked },
    }));
    if (onCheckboxChange) onCheckboxChange(rowIndex, column, checked);
  };

  const handleDragStart = (col) => setDraggingColumn(col);
  const handleDragOver = (e, col) => {
    e.preventDefault();
    setDropTarget(col);
  };
  const handleDrop = (targetCol) => {
    setDraggingColumn(null);
    setDropTarget(null);
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

  console.log('paginatedData[0]:', paginatedData[0]);
  console.log('columnOrder:', columnOrder);

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
      enableScrollbar={enableScrollbar}
      includeDescription={includeDescription}
      maxDescriptionLength={maxDescriptionLength}
      modalConfig={modalConfig}
      descriptionWidth={descriptionWidth}
      forceFixedRowHeight={forceFixedRowHeight}
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
