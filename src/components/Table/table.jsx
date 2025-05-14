
// import { memo } from 'react';
// import { FaSortUp, FaSortDown, FaArrowsAlt } from 'react-icons/fa';
// import { FaSort } from 'react-icons/fa6';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const UIKitTable = ({
//   columns = [],
//   data = [],
//   headerColor,
//   rowColors,
//   sortConfig,
//   editingRow,
//   editingColumn,
//   editedRowData,
//   showConfirmation,
//   currentPage,
//   totalPages,
//   visiblePages,
//   searchQuery,
//   enableRowSelection,
//   selectedRows,
//   editableColumns,
//   editMode = 'column',
//   enableExport,
//   rowHeight,
//   cellPadding,
//   checkboxColumns,
//   checkboxStates,
//   sortIconSize,
//   headerFontSize,
//   enableColumnDrag,
//   draggingColumn,
//   dropTarget,
//   enableScrollbar = true,
//   includeDescription,
//   maxDescriptionLength,
//   modalConfig,
//   descriptionWidth = 300,
//   descriptionMaxWidth,
//   enableWordBreak = true,
//   forceFixedRowHeight,
//   onSort,
//   onEditStart,
//   onEditChange,
//   onSave,
//   onCancel,
//   onConfirmAction,
//   onPageChange,
//   onNext,
//   onPrevious,
//   onSearch,
//   onRowSelection,
//   onSelectAll,
//   onExport,
//   onCheckboxChange,
//   onDragStart,
//   onDragOver,
//   onDrop,
// }) => {
//   const getSortIconSizeClass = (size) => {
//     const sizeMap = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' };
//     return sizeMap[size] || 'w-3 h-3';
//   };

//   const getHeaderFontSizeClass = (size) => {
//     const sizeMap = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };
//     return sizeMap[size] || 'text-sm';
//   };

//   const getSortIcon = (key) => {
//     const isActive = sortConfig?.key === key;
//     const baseClasses = `${getSortIconSizeClass(sortIconSize)} ml-2`;
//     const colorClass = isActive ? 'text-white' : 'text-[#3A4C7D]';
//     const opacityClass = !isActive ? 'opacity-50 group-hover:opacity-100 transition-opacity' : 'opacity-100';

//     if (isActive) {
//       return sortConfig.direction === 'asc' ? (
//         <FaSortUp className={`${baseClasses} ${colorClass} ${opacityClass}`} />
//       ) : (
//         <FaSortDown className={`${baseClasses} ${colorClass} ${opacityClass}`} />
//       );
//     }
//     return <FaSort className={`${baseClasses} ${colorClass} ${opacityClass}`} />;
//   };

//   const getRowColor = (index) => {
//     if (!Array.isArray(rowColors) || rowColors.length === 0) return '#ffffff';
//     return rowColors.length === 1 ? rowColors[0] : rowColors[index % 2];
//   };

//   const rowHeightClass = forceFixedRowHeight
//     ? { sm: 'h-8', md: 'h-10', lg: 'h-12' }[rowHeight] || 'h-8'
//     : { sm: 'min-h-8', md: 'min-h-10', lg: 'min-h-12' }[rowHeight] || 'min-h-8';

//   const cellPaddingClass = { sm: 'px-2 py-1', md: 'px-3 py-1.5', lg: 'px-4 py-2' }[cellPadding] || 'px-2 py-1';
//   const inputPaddingClass = { sm: 'px-1 py-0.5', md: 'px-2 py-1', lg: 'px-3 py-1.5' }[cellPadding] || 'px-1 py-0.5';

//   console.log('UIKitTable - editMode:', editMode);
//   console.log('UIKitTable - enableScrollbar:', enableScrollbar);
//   console.log('UIKitTable - descriptionWidth:', descriptionWidth);
//   console.log('UIKitTable - descriptionMaxWidth:', descriptionMaxWidth);
//   console.log('UIKitTable - enableWordBreak:', enableWordBreak);
//   console.log('UIKitTable - columns:', columns);

//   return (
//     <div className="p-4 space-y-6">
//       <h2 className="text-2xl font-bold text-[#4B5EAA] text-center">Student Records Table</h2>
//       <div className="space-y-2">
//         <h3 className="text-lg font-semibold text-center text-gray-700">Primary Student Table</h3>
//         <div className="relative">
//           <div className="flex items-center justify-between mb-3">
//             <input
//               type="text"
//               value={searchQuery || ''}
//               onChange={(e) => onSearch?.(e.target.value)}
//               className="px-3 py-1 border rounded w-56 text-sm"
//               placeholder="Search table..."
//             />
//             {enableRowSelection && enableExport && selectedRows.length > 0 && (
//               <button
//                 onClick={onExport}
//                 className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//               >
//                 Export Selected ({selectedRows.length})
//               </button>
//             )}
//           </div>
//           <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
//             <div className="inline-block min-w-full">
//               <table
//                 className="w-full text-sm text-left bg-white table-auto border-collapse"
//                 role="grid"
//               >
//                 <thead style={{ backgroundColor: headerColor || '#4B5EAA' }} className="text-white sticky top-0 z-10">
//                   <tr className={rowHeightClass}>
//                     {enableRowSelection && (
//                       <th
//                         className={`${cellPaddingClass} ${getHeaderFontSizeClass(headerFontSize)} border-r border-white sticky left-0 bg-[${headerColor || '#4B5EAA'}] z-20 min-w-[40px] align-middle shadow-md`}
//                       >
//                         <input
//                           type="checkbox"
//                           checked={selectedRows.length === data.length}
//                           onChange={(e) => onSelectAll?.(e.target.checked)}
//                           className="cursor-pointer"
//                           aria-label="Select all rows"
//                         />
//                       </th>
//                     )}
//                     {columns.map((col, index) => {
//                       const isFirstColumn = index === 0 && !enableRowSelection;
//                       const isLastColumn = index === columns.length - 1;
//                       return (
//                         <th
//                           key={col}
//                           onClick={() => onSort?.(col)}
//                           className={`group ${cellPaddingClass} ${getHeaderFontSizeClass(headerFontSize)} font-semibold cursor-pointer border-r border-white last:border-r-0 ${
//                             isFirstColumn ? 'sticky left-0 z-20 shadow-md' : ''
//                           } ${isLastColumn ? 'sticky right-0 z-20 shadow-md' : ''} ${
//                             draggingColumn === col ? 'bg-blue-700' : dropTarget === col ? 'bg-blue-500' : ''
//                           } align-middle overflow-hidden whitespace-normal bg-[${headerColor || '#4B5EAA'}]`}
//                           role="columnheader"
//                           aria-sort={sortConfig?.key === col ? sortConfig.direction : 'none'}
//                           tabIndex={enableColumnDrag ? 0 : -1}
//                           aria-label={enableColumnDrag ? `Drag to reorder ${col} column` : undefined}
//                         >
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                               {enableColumnDrag && (
//                                 <div
//                                   draggable={enableColumnDrag}
//                                   onDragStart={(e) => {
//                                     e.stopPropagation();
//                                     e.dataTransfer.setData('text/plain', col);
//                                     onDragStart?.(col);
//                                   }}
//                                   onDragOver={(e) => {
//                                     e.stopPropagation();
//                                     e.preventDefault();
//                                     onDragOver?.(e, col);
//                                   }}
//                                   onDragEnter={(e) => {
//                                     e.stopPropagation();
//                                     e.preventDefault();
//                                     onDragOver?.(e, col);
//                                   }}
//                                   onDragLeave={(e) => e.stopPropagation()}
//                                   onDrop={(e) => {
//                                     e.stopPropagation();
//                                     e.preventDefault();
//                                     onDrop?.(col);
//                                   }}
//                                   className="inline-flex items-center cursor-move hover:scale-110 transition-transform"
//                                   title={`Drag to reorder ${col}`}
//                                   style={{ pointerEvents: 'auto' }}
//                                 >
//                                   <FaArrowsAlt
//                                     className={`${getSortIconSizeClass(sortIconSize)} mr-2 ${
//                                       draggingColumn === col
//                                         ? 'text-white opacity-100'
//                                         : 'text-[#3A4C7D] opacity-50 group-hover:opacity-100 transition-opacity'
//                                     }`}
//                                     aria-hidden="true"
//                                   />
//                                 </div>
//                               )}
//                               <span className="truncate">{col}</span>
//                             </div>
//                             {getSortIcon(col)}
//                           </div>
//                         </th>
//                       );
//                     })}
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {data.length === 0 ? (
//                     <tr className={`${rowHeightClass}`}>
//                       <td
//                         colSpan={columns.length + (enableRowSelection ? 1 : 0)}
//                         className={`${cellPaddingClass} text-center text-gray-500 align-middle`}
//                       >
//                         No data available
//                       </td>
//                     </tr>
//                   ) : (
//                     data.map((row, rowIndex) => (
//                       <tr
//                         key={rowIndex}
//                         className={`hover:bg-gray-50 table-row ${rowHeightClass}`}
//                         style={{ backgroundColor: getRowColor(rowIndex) }}
//                         role="row"
//                       >
//                         {enableRowSelection && (
//                           <td
//                             className={`${cellPaddingClass} table-cell sticky left-0 bg-white z-10 min-w-[40px] align-middle shadow-md`}
//                           >
//                             <input
//                               type="checkbox"
//                               checked={selectedRows.includes(rowIndex)}
//                               onChange={() => onRowSelection?.(rowIndex)}
//                               className="cursor-pointer"
//                               aria-label={`Select row ${rowIndex + 1}`}
//                             />
//                           </td>
//                         )}
//                         {columns.map((col, index) => {
//                           const isFirstColumn = index === 0 && !enableRowSelection;
//                           const isLastColumn = index === columns.length - 1;
//                           return (
//                             <td
//                               key={col}
//                               className={`${cellPaddingClass} table-cell align-middle ${
//                                 isFirstColumn ? 'sticky left-0 z-10 shadow-md' : ''
//                               } ${isLastColumn ? 'sticky right-0 z-10 shadow-md' : ''} ${
//                                 col === 'Description' ? 'min-w-[300px]' : 'min-w-[100px]'
//                               }`}
//                               style={{
//                                 backgroundColor: isFirstColumn || isLastColumn ? getRowColor(rowIndex) : 'inherit',
//                                 wordBreak: enableWordBreak ? 'break-word' : 'normal',
//                               }}
//                             >
//                               {checkboxColumns.includes(col) && editingRow !== rowIndex ? (
//                                 <input
//                                   type="checkbox"
//                                   checked={checkboxStates[rowIndex]?.[col] || false}
//                                   onChange={(e) => onCheckboxChange?.(rowIndex, col, e.target.checked)}
//                                   className="cursor-pointer"
//                                   aria-label={`Toggle ${col} for row ${rowIndex + 1}`}
//                                   aria-checked={checkboxStates[rowIndex]?.[col] || false}
//                                 />
//                               ) : editingRow === rowIndex && editingColumn === col ? (
//                                 col === 'Description' ? (
//                                   <textarea
//                                     value={editedRowData[col] || row[col] || ''}
//                                     onChange={(e) => onEditChange?.(col, e.target.value)}
//                                     onKeyDown={(e) => {
//                                       if (e.key === 'Enter' && !e.shiftKey) {
//                                         onSave?.();
//                                       } else if (e.key === 'Escape') {
//                                         onCancel?.();
//                                       }
//                                     }}
//                                     className={`w-full min-w-[280px] border border-gray-300 rounded ${inputPaddingClass} text-sm whitespace-normal overflow-wrap break-word resize-y box-border`}
//                                     style={{ minHeight: '60px', maxHeight: '200px', wordBreak: enableWordBreak ? 'break-word' : 'normal' }}
//                                     maxLength={maxDescriptionLength || undefined}
//                                     rows={3}
//                                     aria-label={`Edit ${col} for row ${rowIndex + 1}`}
//                                   />
//                                 ) : (
//                                   <input
//                                     type={col === 'Age' ? 'number' : 'text'}
//                                     value={editedRowData[col] || row[col] || ''}
//                                     onChange={(e) => onEditChange?.(col, e.target.value)}
//                                     onKeyDown={(e) => {
//                                       if (e.key === 'Enter') {
//                                         onSave?.();
//                                       } else if (e.key === 'Escape') {
//                                         onCancel?.();
//                                       }
//                                     }}
//                                     className={`w-full min-w-[80px] border border-gray-300 rounded ${inputPaddingClass} text-sm whitespace-normal overflow-wrap break-word box-border`}
//                                     maxLength={col === 'Description' && maxDescriptionLength ? maxDescriptionLength : undefined}
//                                     aria-label={`Edit ${col} for row ${rowIndex + 1}`}
//                                   />
//                                 )
//                               ) : (
//                                 <span
//                                   onClick={() =>
//                                     (editableColumns?.includes(col) || (includeDescription && col === 'Description')) &&
//                                     !checkboxColumns.includes(col) &&
//                                     onEditStart?.(rowIndex, col)
//                                   }
//                                   className="block whitespace-normal overflow-wrap break-word"
//                                   style={{
//                                     wordBreak: enableWordBreak ? 'break-word' : 'normal',
//                                   }}
//                                 >
//                                   {row[col] || 'N/A'}
//                                 </span>
//                               )}
//                             </td>
//                           );
//                         })}
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//             <div className="flex justify-center items-center mt-3">
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={onPrevious}
//                   disabled={currentPage === 1}
//                   className="p-1.5 rounded-full border border-gray-300 disabled:opacity-50"
//                   aria-label="Previous page"
//                 >
//                   <FaArrowLeft className="text-gray-600 w-4 h-4" />
//                 </button>
//                 {visiblePages.map((page) => (
//                   <button
//                     key={page}
//                     onClick={() => onPageChange?.(page)}
//                     className={`px-2 py-0.5 rounded border text-sm ${
//                       currentPage === page ? 'bg-blue-500 text-white border-blue-500' : 'border-blue-500 text-blue-500'
//                     }`}
//                     aria-label={`Go to page ${page}`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//                 <button
//                   onClick={onNext}
//                   disabled={currentPage === totalPages}
//                   className="p-1.5 rounded-full border border-gray-300 disabled:opacity-50"
//                   aria-label="Next page"
//                 >
//                   <FaArrowRight className="text-gray-600 w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <h3 className="text-base font-semibold mb-3">{modalConfig?.title || 'Confirm Action'}</h3>
//             <p className="mb-4 text-sm">{modalConfig?.message || 'Do you want to save or discard your changes?'}</p>
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => onConfirmAction?.('discard')}
//                 className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm"
//                 aria-label="Confirm discard changes"
//               >
//                 {modalConfig?.discardButtonText || 'Confirm Discard'}
//               </button>
//               <button
//                 onClick={() => onConfirmAction?.('save')}
//                 className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//                 aria-label="Confirm save changes"
//               >
//                 {modalConfig?.saveButtonText || 'Confirm Save'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default memo(UIKitTable);











import { memo } from 'react';
import { FaSortUp, FaSortDown, FaArrowsAlt } from 'react-icons/fa';
import { FaSort } from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UIKitTable = ({
  columns = [],
  data = [],
  headerColor,
  rowColors,
  sortConfig,
  editingRow,
  editingColumn,
  editedRowData,
  showConfirmation,
  currentPage,
  totalPages,
  visiblePages,
  searchQuery,
  enableRowSelection,
  selectedRows,
  editableColumns,
  editMode = 'column',
  enableExport,
  rowHeight,
  cellPadding,
  checkboxColumns,
  checkboxStates,
  sortIconSize,
  headerFontSize,
  enableColumnDrag,
  draggingColumn,
  dropTarget,
  enableScrollbar = true,
  includeDescription,
  maxDescriptionLength,
  modalConfig = { 
    title: 'Confirm Action', 
    message: 'Do you want to save or discard your changes?', 
    saveButtonText: 'Save', 
    discardButtonText: 'Discard'
  },
  descriptionWidth = 300,
  descriptionMaxWidth,
  enableWordBreak = true,
  forceFixedRowHeight,
  onSort,
  onEditStart,
  onEditChange,
  onSave,
  onCancel,
  onConfirmAction,
  onPageChange,
  onNext,
  onPrevious,
  onSearch,
  onRowSelection,
  onSelectAll,
  onExport,
  onCheckboxChange,
  onDragStart,
  onDragOver,
  onDrop,
  onRowClick,
  onRowActionToast, // New prop for toast message
}) => {
  const getSortIconSizeClass = (size) => {
    const sizeMap = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' };
    return sizeMap[size] || 'w-3 h-3';
  };

  const getHeaderFontSizeClass = (size) => {
    const sizeMap = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };
    return sizeMap[size] || 'text-sm';
  };

  const getSortIcon = (key) => {
    const isActive = sortConfig?.key === key;
    const baseClasses = `${getSortIconSizeClass(sortIconSize)} ml-2`;
    const colorClass = isActive ? 'text-white' : 'text-[#3A4C7D]';
    const opacityClass = !isActive ? 'opacity-50 group-hover:opacity-100 transition-opacity' : 'opacity-100';

    if (isActive) {
      return sortConfig.direction === 'asc' ? (
        <FaSortUp className={`${baseClasses} ${colorClass} ${opacityClass}`} />
      ) : (
        <FaSortDown className={`${baseClasses} ${colorClass} ${opacityClass}`} />
      );
    }
    return <FaSort className={`${baseClasses} ${colorClass} ${opacityClass}`} />;
  };

  const getRowColor = (index) => {
    if (!Array.isArray(rowColors) || rowColors.length === 0) return '#ffffff';
    return rowColors.length === 1 ? rowColors[0] : rowColors[index % 2];
  };

  const rowHeightClass = forceFixedRowHeight
    ? { sm: 'h-8', md: 'h-10', lg: 'h-12' }[rowHeight] || 'h-8'
    : { sm: 'min-h-8', md: 'min-h-10', lg: 'min-h-12' }[rowHeight] || 'min-h-8';

  const cellPaddingClass = { sm: 'px-2 py-1', md: 'px-3 py-1.5', lg: 'px-4 py-2' }[cellPadding] || 'px-2 py-1';
  const inputPaddingClass = { sm: 'px-1 py-0.5', md: 'px-2 py-1', lg: 'px-3 py-1.5' }[cellPadding] || 'px-1 py-0.5';

  const formatValue = (key, value) => {
    if (value == null) return 'N/A';
    if (key === 'EnrollmentDate') {
      const date = new Date(value);
      return isNaN(date) ? value : date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
    if (key === 'Major') {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    return value.toString();
  };

  const handleRowClick = (row) => {
    onRowClick?.(row);
    // Show toast notification
    const toastMessage = onRowActionToast ? onRowActionToast(row) : `Action performed on ${row.Name || 'student'}!`;
    toast.success(toastMessage, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };

  console.log('UIKitTable - editMode:', editMode);
  console.log('UIKitTable - enableScrollbar:', enableScrollbar);
  console.log('UIKitTable - descriptionWidth:', descriptionWidth);
  console.log('UIKitTable - descriptionMaxWidth:', descriptionMaxWidth);
  console.log('UIKitTable - enableWordBreak:', enableWordBreak);
  console.log('UIKitTable - columns:', columns);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-[#4B5EAA] text-center">Student Records Table</h2>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-center text-gray-700">Primary Student Table</h3>
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <input
              type="text"
              value={searchQuery || ''}
              onChange={(e) => onSearch?.(e.target.value)}
              className="px-3 py-1 border rounded w-56 text-sm"
              placeholder="Search table..."
            />
            {enableRowSelection && enableExport && selectedRows.length > 0 && (
              <button
                onClick={onExport}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                Export Selected ({selectedRows.length})
              </button>
            )}
          </div>
          <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div className="inline-block min-w-full">
              <table
                className="w-full text-sm text-left bg-white table-auto border-collapse"
                role="grid"
              >
                <thead style={{ backgroundColor: headerColor || '#4B5EAA' }} className="text-white sticky top-0 z-10">
                  <tr className={rowHeightClass}>
                    {enableRowSelection && (
                      <th
                        className={`${cellPaddingClass} ${getHeaderFontSizeClass(headerFontSize)} border-r border-white sticky left-0 bg-[${headerColor || '#4B5EAA'}] z-20 min-w-[40px] align-middle shadow-md`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedRows.length === data.length}
                          onChange={(e) => onSelectAll?.(e.target.checked)}
                          className="cursor-pointer"
                          aria-label="Select all rows"
                        />
                      </th>
                    )}
                    {columns.map((col, index) => {
                      const isFirstColumn = index === 0 && !enableRowSelection;
                      const isLastColumn = index === columns.length - 1;
                      return (
                        <th
                          key={col}
                          onClick={() => onSort?.(col)}
                          className={`group ${cellPaddingClass} ${getHeaderFontSizeClass(headerFontSize)} font-semibold cursor-pointer border-r border-white last:border-r-0 ${
                            isFirstColumn ? 'sticky left-0 z-20 shadow-md' : ''
                          } ${isLastColumn ? 'sticky right-0 z-20 shadow-md' : ''} ${
                            draggingColumn === col ? 'bg-blue-700' : dropTarget === col ? 'bg-blue-500' : ''
                          } align-middle overflow-hidden whitespace-normal bg-[${headerColor || '#4B5EAA'}]`}
                          role="columnheader"
                          aria-sort={sortConfig?.key === col ? sortConfig.direction : 'none'}
                          tabIndex={enableColumnDrag ? 0 : -1}
                          aria-label={enableColumnDrag ? `Drag to reorder ${col} column` : undefined}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {enableColumnDrag && (
                                <div
                                  draggable={enableColumnDrag}
                                  onDragStart={(e) => {
                                    e.stopPropagation();
                                    e.dataTransfer.setData('text/plain', col);
                                    onDragStart?.(col);
                                  }}
                                  onDragOver={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    onDragOver?.(e, col);
                                  }}
                                  onDragEnter={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    onDragOver?.(e, col);
                                  }}
                                  onDragLeave={(e) => e.stopPropagation()}
                                  onDrop={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    onDrop?.(col);
                                  }}
                                  className="inline-flex items-center cursor-move hover:scale-110 transition-transform"
                                  title={`Drag to reorder ${col}`}
                                  style={{ pointerEvents: 'auto' }}
                                >
                                  <FaArrowsAlt
                                    className={`${getSortIconSizeClass(sortIconSize)} mr-2 ${
                                      draggingColumn === col
                                        ? 'text-white opacity-100'
                                        : 'text-[#3A4C7D] opacity-50 group-hover:opacity-100 transition-opacity'
                                    }`}
                                    aria-hidden="true"
                                  />
                                </div>
                              )}
                              <span className="truncate">{col}</span>
                            </div>
                            {getSortIcon(col)}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.length === 0 ? (
                    <tr className={`${rowHeightClass}`}>
                      <td
                        colSpan={columns.length + (enableRowSelection ? 1 : 0)}
                        className={`${cellPaddingClass} text-center text-gray-500 align-middle`}
                      >
                        No data available
                      </td>
                    </tr>
                  ) : (
                    data.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={`hover:bg-gray-50 table-row ${rowHeightClass} cursor-pointer`}
                        style={{ backgroundColor: getRowColor(rowIndex) }}
                        role="row"
                        onClick={() => handleRowClick(row)}
                      >
                        {enableRowSelection && (
                          <td
                            className={`${cellPaddingClass} table-cell sticky left-0 bg-white z-10 min-w-[40px] align-middle shadow-md`}
                          >
                            <input
                              type="checkbox"
                              checked={selectedRows.includes(rowIndex)}
                              onChange={(e) => {
                                e.stopPropagation();
                                onRowSelection?.(rowIndex);
                              }}
                              className="cursor-pointer"
                              aria-label={`Select row ${rowIndex + 1}`}
                            />
                          </td>
                        )}
                        {columns.map((col, index) => {
                          const isFirstColumn = index === 0 && !enableRowSelection;
                          const isLastColumn = index === columns.length - 1;
                          return (
                            <td
                              key={col}
                              className={`${cellPaddingClass} table-cell align-middle ${
                                isFirstColumn ? 'sticky left-0 z-10 shadow-md' : ''
                              } ${isLastColumn ? 'sticky right-0 z-10 shadow-md' : ''} ${
                                col === 'Description' ? 'min-w-[300px]' : 'min-w-[100px]'
                              }`}
                              style={{
                                backgroundColor: isFirstColumn || isLastColumn ? getRowColor(rowIndex) : 'inherit',
                                wordBreak: enableWordBreak ? 'break-word' : 'normal',
                              }}
                            >
                              {checkboxColumns.includes(col) && editingRow !== rowIndex ? (
                                <input
                                  type="checkbox"
                                  checked={checkboxStates[rowIndex]?.[col] || false}
                                  onChange={(e) => {
                                    e.stopPropagation();
                                    onCheckboxChange?.(rowIndex, col, e.target.checked);
                                  }}
                                  className="cursor-pointer"
                                  aria-label={`Toggle ${col} for row ${rowIndex + 1}`}
                                  aria-checked={checkboxStates[rowIndex]?.[col] || false}
                                />
                              ) : editingRow === rowIndex && editingColumn === col ? (
                                col === 'Description' ? (
                                  <textarea
                                    value={editedRowData[col] || row[col] || ''}
                                    onChange={(e) => onEditChange?.(col, e.target.value)}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter' && !e.shiftKey) {
                                        onSave?.();
                                      } else if (e.key === 'Escape') {
                                        onCancel?.();
                                      }
                                    }}
                                    className={`w-full min-w-[280px] border border-gray-300 rounded ${inputPaddingClass} text-sm whitespace-normal overflow-wrap break-word resize-y box-border`}
                                    style={{ minHeight: '60px', maxHeight: '200px', wordBreak: enableWordBreak ? 'break-word' : 'normal' }}
                                    maxLength={maxDescriptionLength || undefined}
                                    rows={3}
                                    aria-label={`Edit ${col} for row ${rowIndex + 1}`}
                                  />
                                ) : (
                                  <input
                                    type={col === 'Age' ? 'number' : 'text'}
                                    value={editedRowData[col] || row[col] || ''}
                                    onChange={(e) => onEditChange?.(col, e.target.value)}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') {
                                        onSave?.();
                                      } else if (e.key === 'Escape') {
                                        onCancel?.();
                                      }
                                    }}
                                    className={`w-full min-w-[80px] border border-gray-300 rounded ${inputPaddingClass} text-sm whitespace-normal overflow-wrap break-word box-border`}
                                    maxLength={col === 'Description' && maxDescriptionLength ? maxDescriptionLength : undefined}
                                    aria-label={`Edit ${col} for row ${rowIndex + 1}`}
                                  />
                                )
                              ) : (
                                <span
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (
                                      (editableColumns?.includes(col) || (includeDescription && col === 'Description')) &&
                                      !checkboxColumns.includes(col)
                                    ) {
                                      onEditStart?.(rowIndex, col);
                                    }
                                  }}
                                  className="block whitespace-normal overflow-wrap break-word"
                                  style={{
                                    wordBreak: enableWordBreak ? 'break-word' : 'normal',
                                  }}
                                >
                                  {formatValue(col, row[col])}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={onPrevious}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-full border border-gray-300 disabled:opacity-50"
                  aria-label="Previous page"
                >
                  <FaArrowLeft className="text-gray-600 w-4 h-4" />
                </button>
                {visiblePages.map((page) => (
                  <button
                    key={page}
                    onClick={() => onPageChange?.(page)}
                    className={`px-2 py-0.5 rounded border text-sm ${
                      currentPage === page ? 'bg-blue-500 text-white border-blue-500' : 'border-blue-500 text-blue-500'
                    }`}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={onNext}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-full border border-gray-300 disabled:opacity-50"
                  aria-label="Next page"
                >
                  <FaArrowRight className="text-gray-600 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-base font-semibold mb-3">{modalConfig?.title || 'Confirm Action'}</h3>
            <p className="mb-4 text-sm">{modalConfig?.message || 'Do you want to save or discard your changes?'}</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => onConfirmAction?.('discard')}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm"
                aria-label="Discard changes"
              >
                {modalConfig?.discardButtonText || 'Discard'}
              </button>
              <button
                onClick={() => onConfirmAction?.('save')}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                aria-label="Save changes"
              >
                {modalConfig?.saveButtonText || 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(UIKitTable);


















