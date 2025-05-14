


// import React, { useState, useMemo, useEffect } from 'react';
// import UIKitTable from '../Table/table';

// const generateStudentData = (count) => {
//   const names = [
//     'Ali', 'Ahmed', 'Sara', 'Fatima', 'Hassan', 'Zainab', 'Omar', 'Aisha', 'Bilal', 'Maryam',
//     'Yousuf', 'Amna', 'Ibrahim', 'Khadija', 'Usman', 'Sadia', 'Hamza', 'Noor', 'Abdullah', 'Zara'
//   ];
//   const grades = ['A', 'B', 'C', 'D', 'F'];
//   const statuses = ['Pass', 'Fail', 'On Hold'];
//   const addresses = ['123 Main St', '456 Oak Ave', '789 Pine Rd', '101 Elm St', '202 Birch Ln'];
//   const emails = ['user1@example.com', 'user2@example.com', 'user3@example.com', 'user4@example.com', 'user5@example.com'];
//   const phones = ['+1-123-456-7890', '+1-234-567-8901', '+1-345-678-9012', '+1-456-789-0123', '+1-567-890-1234'];
//   const descriptions = [
//     'Good student with excellent grades',
//     'Needs improvement in math',
//     'Very active in class activities',
//     'Consistent performer',
//     'Requires attention in studies. This is a very long description to test text wrapping behavior in the table.'
//   ];
//   const majors = ['Computer Science', 'Mathematics', 'Physics', 'Biology', 'Literature'];

//   const data = [];
//   for (let i = 0; i < count; i++) {
//     const enrollmentYear = 2020 + Math.floor(Math.random() * 5);
//     const enrollmentMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
//     const enrollmentDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
//     data.push({
//       Name: names[Math.floor(Math.random() * names.length)],
//       RollNo: `R${1000 + i}`,
//       Grade: grades[Math.floor(Math.random() * grades.length)],
//       Marks: Math.floor(Math.random() * 100) + 1,
//       Status: statuses[Math.floor(Math.random() * statuses.length)],
//       Address: addresses[Math.floor(Math.random() * addresses.length)],
//       Email: emails[Math.floor(Math.random() * emails.length)],
//       Phone: phones[Math.floor(Math.random() * phones.length)],
//       Description: descriptions[Math.floor(Math.random() * descriptions.length)],
//       Age: Math.floor(Math.random() * (25 - 18 + 1)) + 18,
//       EnrollmentDate: `${enrollmentYear}-${enrollmentMonth}-${enrollmentDay}`,
//       Major: majors[Math.floor(Math.random() * majors.length)],
//     });
//   }
//   return data;
// };

// const defaultStudentData = generateStudentData(100);

// const validateAndNormalizeColors = (colors) => {
//   if (!Array.isArray(colors) || colors.length < 1 || colors.length > 2) {
//     return ['#ffffff', '#f9f9f9'];
//   }
//   return colors.map((color) => (typeof color === 'string' && color.trim() ? (color.startsWith('#') ? color : `#${color}`) : '#ffffff'));
// };

// const TableView = ({
//   columns = ['Name', 'RollNo', 'Grade', 'Marks', 'Status', 'Address', 'Email', 'Phone', 'Description', 'Age', 'EnrollmentDate', 'Major'],
//   data = defaultStudentData,
//   headerColor = '#4B5EAA',
//   rowColors = ['#ffffff', '#f9f9f9'],
//   pageSize = 20,
//   initialPage = 1,
//   initialSort = { key: null, direction: null },
//   initialSearch = '',
//   enableRowSelection = false,
//   editableColumns = ['Name', 'RollNo', 'Description', 'Age', 'Major'],
//   editMode = 'column',
//   enableExport = false,
//   onEditStart = null,
//   onEditSave = null,
//   rowHeight = 'sm',
//   cellPadding = 'sm',
//   checkboxColumns = [],
//   onCheckboxChange = null,
//   sortIconSize = 'sm',
//   headerFontSize = 'sm',
//   enableColumnDrag = true,
//   enableScrollbar = true,
//   includeDescription = true,
//   maxDescriptionLength = 500,
//   modalConfig = {
//     title: 'Confirm Action',
//     message: 'Do you want to save or discard your changes?',
//     saveButtonText: 'Confirm Save',
//     discardButtonText: 'Confirm Discard'
//   },
//   descriptionWidth = 300,
//   descriptionMaxWidth,
//   enableWordBreak = true,
//   forceFixedRowHeight = false,
// }) => {
//   const validatedEditMode = editMode === 'row' || editMode === 'column' ? editMode : 'column';
//   const [tableData, setTableData] = useState(Array.isArray(data) ? data : []);
//   const [columnOrder, setColumnOrder] = useState(() => {
//     const baseOrder = Array.isArray(columns) ? [...columns] : ['Name', 'RollNo', 'Grade', 'Marks', 'Status', 'Address', 'Email', 'Phone', 'Description', 'Age', 'EnrollmentDate', 'Major'];
//     if (includeDescription && !baseOrder.includes('Description')) {
//       baseOrder.push('Description');
//     } else if (!includeDescription) {
//       return baseOrder.filter((col) => col !== 'Description');
//     }
//     return baseOrder;
//   });
//   const [sortConfig, setSortConfig] = useState(initialSort || { key: null, direction: null });
//   const [editingRow, setEditingRow] = useState(null);
//   const [editingColumn, setEditingColumn] = useState(null);
//   const [editedRowData, setEditedRowData] = useState({});
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [pendingEdit, setPendingEdit] = useState(null);
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [searchQuery, setSearchQuery] = useState(initialSearch);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [checkboxStates, setCheckboxStates] = useState({});
//   const [draggingColumn, setDraggingColumn] = useState(null);
//   const [dropTarget, setDropTarget] = useState(null);

//   console.log('TableView props - data:', data);
//   console.log('TableView state - tableData:', tableData);
//   console.log('TableView state - columnOrder:', columnOrder);
//   console.log('TableView props - editMode:', editMode, 'validatedEditMode:', validatedEditMode);
//   console.log('TableView props - enableScrollbar:', enableScrollbar);
//   console.log('TableView state - editingRow:', editingRow, 'editingColumn:', editingColumn);
//   console.log('TableView props - forceFixedRowHeight:', forceFixedRowHeight);

//   const normalizedRowColors = validateAndNormalizeColors(rowColors);

//   const validCheckboxColumns = useMemo(() => {
//     return Array.isArray(checkboxColumns)
//       ? checkboxColumns.filter((col) => columnOrder.includes(col))
//       : [];
//   }, [checkboxColumns, columnOrder]);

//   useEffect(() => {
//     if (validCheckboxColumns.length > 0) {
//       setCheckboxStates({});
//     }
//   }, [validCheckboxColumns]);

//   const filteredData = useMemo(() => {
//     if (!Array.isArray(tableData)) {
//       console.warn('tableData is not an array:', tableData);
//       return [];
//     }
//     return tableData.filter((row) => {
//       if (!row || typeof row !== 'object') return false;
//       return Object.values(row).some((value) =>
//         value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     });
//   }, [tableData, searchQuery]);

//   const totalPages = Math.ceil((filteredData.length || 0) / pageSize);

//   const paginatedData = useMemo(() => {
//     if (!Array.isArray(filteredData)) {
//       console.warn('filteredData is not an array:', filteredData);
//       return [];
//     }
//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     return filteredData.slice(startIndex, endIndex);
//   }, [filteredData, currentPage, pageSize]);

//   console.log('TableView - filteredData:', filteredData);
//   console.log('TableView - paginatedData:', paginatedData);

//   const handleSort = (key) => {
//     if (!Array.isArray(filteredData)) return;
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction) {
//       direction = sortConfig.direction === 'asc' ? 'desc' : null;
//     }
//     setSortConfig({ key, direction });

//     const sortedData = [...filteredData].sort((a, b) => {
//       const valA = a[key]?.toString() || '';
//       const valB = b[key]?.toString() || '';

//       if (key === 'Age') {
//         const numA = parseFloat(valA) || 0;
//         const numB = parseFloat(valB) || 0;
//         return direction === 'asc' ? numA - numB : numB - numA;
//       }

//       if (key === 'EnrollmentDate') {
//         const dateA = new Date(valA);
//         const dateB = new Date(valB);
//         return direction === 'asc' ? dateA - dateB : dateB - dateA;
//       }

//       return direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
//     });
//     setTableData(sortedData);
//   };

//   const handleEditStart = (rowIndex, column) => {
//     if (!Array.isArray(paginatedData) || rowIndex >= paginatedData.length) return;
//     const rowData = paginatedData[rowIndex];
//     if (!rowData) return;
//     setEditingRow(rowIndex);
//     setEditingColumn(column);
//     setEditedRowData({ ...rowData });
//     if (onEditStart) {
//       const editableFields = validatedEditMode === 'row' ? columnOrder : [...editableColumns];
//       onEditStart(rowIndex, editableFields);
//       console.log('Edit started - rowIndex:', rowIndex, 'column:', column, 'editableFields:', editableFields);
//     }
//   };

//   const handleEditChange = (field, value) => {
//     let trimmedValue = value;
//     if (field === 'Description' && maxDescriptionLength && value.length > maxDescriptionLength) {
//       trimmedValue = value.slice(0, maxDescriptionLength);
//     }
//     if (field === 'Age') {
//       trimmedValue = value.replace(/[^0-9]/g, '');
//     }
//     setEditedRowData((prev) => ({ ...prev, [field]: trimmedValue }));
//   };

//   const handleSave = () => {
//     if (editingRow === null || !Array.isArray(paginatedData)) return;
//     const updatedRow = { ...paginatedData[editingRow], ...editedRowData };
//     setPendingEdit({ rowIndex: (currentPage - 1) * pageSize + editingRow, updatedRow });
//     setShowConfirmation(true);
//   };

//   const handleCancel = () => {
//     setShowConfirmation(true);
//     setPendingEdit(null);
//   };

//   const handleConfirmAction = (action) => {
//     if (action === 'save' && pendingEdit && Array.isArray(tableData)) {
//       setTableData((prev) =>
//         prev.map((item, idx) => (idx === pendingEdit.rowIndex ? pendingEdit.updatedRow : item))
//       );
//       if (onEditSave) onEditSave(pendingEdit.updatedRow);
//     }
//     setEditingRow(null);
//     setEditingColumn(null);
//     setEditedRowData({});
//     setPendingEdit(null);
//     setShowConfirmation(false);
//   };

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleRowSelection = (rowIndex) => {
//     setSelectedRows((prev) =>
//       prev.includes(rowIndex) ? prev.filter((idx) => idx !== rowIndex) : [...prev, rowIndex]
//     );
//   };

//   const handleSelectAll = (checked) => {
//     if (checked) {
//       const pageIndices = paginatedData.map((_, idx) => idx);
//       setSelectedRows(pageIndices);
//     } else {
//       setSelectedRows([]);
//     }
//   };

//   const handleExport = () => {
//     if (!Array.isArray(filteredData)) return;
//     const selectedData = selectedRows.map((idx) => filteredData[(currentPage - 1) * pageSize + idx]);
//     const csvContent = [
//       columnOrder.join(','),
//       ...selectedData.map((row) => columnOrder.map((col) => `"${row[col] || ''}"`).join(',')),
//     ].join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'selected_students.csv';
//     link.click();
//     URL.revokeObjectURL(link.href);
//   };

//   const handleCheckboxChange = (rowIndex, column, checked) => {
//     setCheckboxStates((prev) => ({
//       ...prev,
//       [rowIndex]: { ...prev[rowIndex], [column]: checked },
//     }));
//     if (onCheckboxChange) onCheckboxChange(rowIndex, column, checked);
//   };

//   const handleDragStart = (col) => {
//     if (columnOrder.includes(col)) {
//       setDraggingColumn(col);
//       console.log('Drag started on column:', col);
//     }
//   };

//   const handleDragOver = (e, col) => {
//     if (columnOrder.includes(col)) {
//       e.preventDefault();
//       setDropTarget(col);
//       console.log('Dragging over column:', col);
//     }
//   };

//   const handleDrop = (targetCol) => {
//     if (!draggingColumn || !targetCol || !columnOrder.includes(draggingColumn) || !columnOrder.includes(targetCol)) {
//       setDraggingColumn(null);
//       setDropTarget(null);
//       return;
//     }

//     const newOrder = [...columnOrder];
//     const dragIndex = newOrder.indexOf(draggingColumn);
//     const dropIndex = newOrder.indexOf(targetCol);

//     if (dragIndex !== dropIndex) {
//       newOrder.splice(dragIndex, 1);
//       newOrder.splice(dropIndex, 0, draggingColumn);
//       setColumnOrder(newOrder);
//       console.log('New column order:', newOrder);
//     }

//     setDraggingColumn(null);
//     setDropTarget(null);
//   };

//   const maxVisiblePages = 5;
//   const halfVisible = Math.floor(maxVisiblePages / 2);
//   let startPage = Math.max(1, currentPage - halfVisible);
//   let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

//   if (endPage - startPage + 1 < maxVisiblePages) {
//     startPage = Math.max(1, endPage - maxVisiblePages + 1);
//   }

//   const visiblePages = Array.from(
//     { length: endPage - startPage + 1 },
//     (_, index) => startPage + index
//   );

//   return (
//     <UIKitTable
//       columns={columnOrder}
//       data={paginatedData}
//       headerColor={headerColor}
//       rowColors={normalizedRowColors}
//       sortConfig={sortConfig}
//       editingRow={editingRow}
//       editingColumn={editingColumn}
//       editedRowData={editedRowData}
//       showConfirmation={showConfirmation}
//       currentPage={currentPage}
//       totalPages={totalPages}
//       visiblePages={visiblePages}
//       searchQuery={searchQuery}
//       enableRowSelection={enableRowSelection}
//       selectedRows={selectedRows}
//       editableColumns={editableColumns}
//       editMode={validatedEditMode}
//       enableExport={enableExport}
//       rowHeight={rowHeight}
//       cellPadding={cellPadding}
//       checkboxColumns={validCheckboxColumns}
//       checkboxStates={checkboxStates}
//       sortIconSize={sortIconSize}
//       headerFontSize={headerFontSize}
//       enableColumnDrag={enableColumnDrag}
//       draggingColumn={draggingColumn}
//       dropTarget={dropTarget}
//       enableScrollbar={enableScrollbar}
//       includeDescription={includeDescription}
//       maxDescriptionLength={maxDescriptionLength}
//       modalConfig={modalConfig}
//       descriptionWidth={descriptionWidth}
//       descriptionMaxWidth={descriptionMaxWidth}
//       enableWordBreak={enableWordBreak}
//       forceFixedRowHeight={forceFixedRowHeight}
//       onSort={handleSort}
//       onEditStart={handleEditStart}
//       onEditChange={handleEditChange}
//       onSave={handleSave}
//       onCancel={handleCancel}
//       onConfirmAction={handleConfirmAction}
//       onPageChange={handlePageChange}
//       onNext={handleNext}
//       onPrevious={handlePrevious}
//       onSearch={(query) => setSearchQuery(query)}
//       onRowSelection={handleRowSelection}
//       onSelectAll={handleSelectAll}
//       onExport={handleExport}
//       onCheckboxChange={handleCheckboxChange}
//       onDragStart={handleDragStart}
//       onDragOver={handleDragOver}
//       onDrop={handleDrop}
//     />
//   );
// };

// export default TableView;


























import React, { useState, useMemo, useEffect } from 'react';
import UIKitTable from '../Table/table';

const generateStudentData = (count) => {
  const names = [
    'Ali', 'Ahmed', 'Sara', 'Fatima', 'Hassan', 'Zainab', 'Omar', 'Aisha', 'Bilal', 'Maryam',
    'Yousuf', 'Amna', 'Ibrahim', 'Khadija', 'Usman', 'Sadia', 'Hamza', 'Noor', 'Abdullah', 'Zara'
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
    'Requires attention in studies. This is a very long description to test text wrapping behavior in the table.'
  ];
  const majors = ['Computer Science', 'Mathematics', 'Physics', 'Biology', 'Literature'];

  const data = [];
  for (let i = 0; i < count; i++) {
    const enrollmentYear = 2020 + Math.floor(Math.random() * 5);
    const enrollmentMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const enrollmentDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    data.push({
      Name: names[Math.floor(Math.random() * names.length)],
      RollNo: `R${1000 + i}`,
      Grade: grades[Math.floor(Math.random() * grades.length)],
      Marks: Math.floor(Math.random() * 100) + 1,
      Status: statuses[Math.floor(Math.random() * statuses.length)],
      Address: addresses[Math.floor(Math.random() * addresses.length)],
      Email: emails[Math.floor(Math.random() * emails.length)],
      Phone: phones[Math.floor(Math.random() * phones.length)],
      Description: descriptions[Math.floor(Math.random() * descriptions.length)],
      Age: Math.floor(Math.random() * (25 - 18 + 1)) + 18,
      EnrollmentDate: `${enrollmentYear}-${enrollmentMonth}-${enrollmentDay}`,
      Major: majors[Math.floor(Math.random() * majors.length)],
    });
  }
  return data;
};

const defaultStudentData = generateStudentData(100);

const validateAndNormalizeColors = (colors) => {
  if (!Array.isArray(colors) || colors.length < 1 || colors.length > 2) {
    return ['#ffffff', '#f9f9f9'];
  }
  return colors.map((color) => (typeof color === 'string' && color.trim() ? (color.startsWith('#') ? color : `#${color}`) : '#ffffff'));
};

const TableView = ({
  columns = ['Name', 'RollNo', 'Grade', 'Marks', 'Status', 'Address', 'Email', 'Phone', 'Description', 'Age', 'EnrollmentDate', 'Major'],
  data = defaultStudentData,
  headerColor = '#4B5EAA',
  rowColors = ['#ffffff', '#f9f9f9'],
  pageSize = 20,
  initialPage = 1,
  initialSort = { key: null, direction: null },
  initialSearch = '',
  enableRowSelection = false,
  editableColumns = ['Name', 'RollNo', 'Description', 'Age', 'Major'],
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
  maxDescriptionLength = 500,
  modalConfig = {
    title: 'Confirm Action',
    message: 'Do you want to save or discard your changes?',
    saveButtonText: 'Save',
    discardButtonText: 'Discard'
  },
  descriptionWidth = 300,
  descriptionMaxWidth,
  enableWordBreak = true,
  forceFixedRowHeight = false,
}) => {
  const validatedEditMode = editMode === 'row' || editMode === 'column' ? editMode : 'column';
  const [tableData, setTableData] = useState(Array.isArray(data) ? data : []);
  const [columnOrder, setColumnOrder] = useState(() => {
    const baseOrder = Array.isArray(columns) ? [...columns] : ['Name', 'RollNo', 'Grade', 'Marks', 'Status', 'Address', 'Email', 'Phone', 'Description', 'Age', 'EnrollmentDate', 'Major'];
    if (includeDescription && !baseOrder.includes('Description')) {
      baseOrder.push('Description');
    } else if (!includeDescription) {
      return baseOrder.filter((col) => col !== 'Description');
    }
    return baseOrder;
  });
  const [sortConfig, setSortConfig] = useState(initialSort || { key: null, direction: null });
  const [editingRow, setEditingRow] = useState(null);
  const [editingColumn, setEditingColumn] = useState(null);
  const [editedRowData, setEditedRowData] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingEdit, setPendingEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRows, setSelectedRows] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [draggingColumn, setDraggingColumn] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);

  const normalizedRowColors = validateAndNormalizeColors(rowColors);

  const validCheckboxColumns = useMemo(() => {
    return Array.isArray(checkboxColumns)
      ? checkboxColumns.filter((col) => columnOrder.includes(col))
      : [];
  }, [checkboxColumns, columnOrder]);

  useEffect(() => {
    if (validCheckboxColumns.length > 0) {
      setCheckboxStates({});
    }
  }, [validCheckboxColumns]);

  const filteredData = useMemo(() => {
    if (!Array.isArray(tableData)) {
      console.warn('tableData is not an array:', tableData);
      return [];
    }
    return tableData.filter((row) => {
      if (!row || typeof row !== 'object') return false;
      return Object.values(row).some((value) =>
        value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [tableData, searchQuery]);

  const totalPages = Math.ceil((filteredData.length || 0) / pageSize);

  const paginatedData = useMemo(() => {
    if (!Array.isArray(filteredData)) {
      console.warn('filteredData is not an array:', filteredData);
      return [];
    }
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, pageSize]);

  console.log('TableView - filteredData:', filteredData);
  console.log('TableView - paginatedData:', paginatedData);

  const handleSort = (key) => {
    if (!Array.isArray(filteredData)) return;
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction) {
      direction = sortConfig.direction === 'asc' ? 'desc' : null;
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      const valA = a[key]?.toString() || '';
      const valB = b[key]?.toString() || '';

      if (key === 'Age') {
        const numA = parseFloat(valA) || 0;
        const numB = parseFloat(valB) || 0;
        return direction === 'asc' ? numA - numB : numB - numA;
      }

      if (key === 'EnrollmentDate') {
        const dateA = new Date(valA);
        const dateB = new Date(valB);
        return direction === 'asc' ? dateA - dateB : dateB - dateA;
      }

      return direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
    setTableData(sortedData);
  };

  const handleEditStart = (rowIndex, column) => {
    if (!Array.isArray(paginatedData) || rowIndex >= paginatedData.length) return;
    const rowData = paginatedData[rowIndex];
    if (!rowData) return;
    setEditingRow(rowIndex);
    setEditingColumn(column);
    setEditedRowData({ ...rowData });
    if (onEditStart) {
      const editableFields = validatedEditMode === 'row' ? columnOrder : [...editableColumns];
      onEditStart(rowIndex, editableFields);
      console.log('Edit started - rowIndex:', rowIndex, 'column:', column, 'editableFields:', editableFields);
    }
  };

  const handleEditChange = (field, value) => {
    let trimmedValue = value;
    if (field === 'Description' && maxDescriptionLength && value.length > maxDescriptionLength) {
      trimmedValue = value.slice(0, maxDescriptionLength);
    }
    if (field === 'Age') {
      trimmedValue = value.replace(/[^0-9]/g, '');
    }
    setEditedRowData((prev) => ({ ...prev, [field]: trimmedValue }));
  };

  const handleSave = () => {
    if (editingRow === null || !Array.isArray(paginatedData)) return;
    const updatedRow = { ...paginatedData[editingRow], ...editedRowData };
    setPendingEdit({ rowIndex: (currentPage - 1) * pageSize + editingRow, updatedRow });
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowConfirmation(true);
    setPendingEdit(null);
  };

  const handleConfirmAction = (action) => {
    if (action === 'save' && pendingEdit && Array.isArray(tableData)) {
      setTableData((prev) =>
        prev.map((item, idx) => (idx === pendingEdit.rowIndex ? pendingEdit.updatedRow : item))
      );
      if (onEditSave) onEditSave(pendingEdit.updatedRow);
    }
    setEditingRow(null);
    setEditingColumn(null);
    setEditedRowData({});
    setPendingEdit(null);
    setShowConfirmation(false);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleRowSelection = (rowIndex) => {
    setSelectedRows((prev) =>
      prev.includes(rowIndex) ? prev.filter((idx) => idx !== rowIndex) : [...prev, rowIndex]
    );
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      const pageIndices = paginatedData.map((_, idx) => idx);
      setSelectedRows(pageIndices);
    } else {
      setSelectedRows([]);
    }
  };

  const handleExport = () => {
    if (!Array.isArray(filteredData)) return;
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

  const handleDragStart = (col) => {
    if (columnOrder.includes(col)) {
      setDraggingColumn(col);
      console.log('Drag started on column:', col);
    }
  };

  const handleDragOver = (e, col) => {
    if (columnOrder.includes(col)) {
      e.preventDefault();
      setDropTarget(col);
      console.log('Dragging over column:', col);
    }
  };

  const handleDrop = (targetCol) => {
    if (!draggingColumn || !targetCol || !columnOrder.includes(draggingColumn) || !columnOrder.includes(targetCol)) {
      setDraggingColumn(null);
      setDropTarget(null);
      return;
    }

    const newOrder = [...columnOrder];
    const dragIndex = newOrder.indexOf(draggingColumn);
    const dropIndex = newOrder.indexOf(targetCol);

    if (dragIndex !== dropIndex) {
      newOrder.splice(dragIndex, 1);
      newOrder.splice(dropIndex, 0, draggingColumn);
      setColumnOrder(newOrder);
      console.log('New column order:', newOrder);
    }

    setDraggingColumn(null);
    setDropTarget(null);
  };

  const handleRowClick = (row) => {
    console.log('Row clicked:', row);
    // Pass row to parent, toast is handled in table.jsx
  };

  const handleRowActionToast = (row) => {
    return `Action triggered for ${row.Name || 'student'}!`;
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

  return (
    <UIKitTable
      columns={columnOrder}
      data={paginatedData}
      headerColor={headerColor}
      rowColors={normalizedRowColors}
      sortConfig={sortConfig}
      editingRow={editingRow}
      editingColumn={editingColumn}
      editedRowData={editedRowData}
      showConfirmation={showConfirmation}
      currentPage={currentPage}
      totalPages={totalPages}
      visiblePages={visiblePages}
      searchQuery={searchQuery}
      enableRowSelection={enableRowSelection}
      selectedRows={selectedRows}
      editableColumns={editableColumns}
      editMode={validatedEditMode}
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
      enableScrollbar={enableScrollbar}
      includeDescription={includeDescription}
      maxDescriptionLength={maxDescriptionLength}
      modalConfig={modalConfig}
      descriptionWidth={descriptionWidth}
      descriptionMaxWidth={descriptionMaxWidth}
      enableWordBreak={enableWordBreak}
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
      onRowClick={handleRowClick}
      onRowActionToast={handleRowActionToast}
    />
  );
};

export default TableView;