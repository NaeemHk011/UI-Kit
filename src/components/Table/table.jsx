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
//   onRowClick,
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
//     ? { sm: 'h-6', md: 'h-8', lg: 'h-10' }[rowHeight] || 'h-6'
//     : { sm: 'min-h-6', md: 'min-h-8', lg: 'min-h-10' }[rowHeight] || 'min-h-6';

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
//                         className={`hover:bg-gray-50 table-row ${rowHeightClass} cursor-pointer transition-colors duration-150`}
//                         style={{ backgroundColor: getRowColor(rowIndex) }}
//                         role="row"
//                         onClick={(e) => {
//                           if (
//                             e.target.type !== 'checkbox' &&
//                             editingRow !== rowIndex &&
//                             onRowClick
//                           ) {
//                             onRowClick(row, rowIndex);
//                           }
//                         }}
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







import React, { useState, useMemo, useEffect } from 'react';
import { Table, Radio, Divider } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';
import { memo } from 'react';
import { FaSortUp, FaSortDown, FaArrowsAlt } from 'react-icons/fa';
import { FaSort } from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { createStyles } from 'antd-style';

const defaultTheme = {
  // Header styling
  headerHeight: '24px',
  headerBgColor: '#4B5EAA',
  headerTextColor: '#ffffff',
  headerFontSize: '12px',
  headerFontWeight: '500',
  headerPadding: '0 8px',

  // Row styling
  rowHeight: '32px',
  rowFontSize: '12px',
  rowPadding: '0 8px',
  rowBorderColor: '#f0f0f0',
  rowHoverBgColor: 'rgba(75, 94, 170, 0.05)',
  evenRowBgColor: '#ffffff',
  oddRowBgColor: '#fafafa',

  // Selection column
  selectionColumnWidth: '32px',
  checkboxSize: '14px',
  checkboxColor: '#4B5EAA',

  // Sort icons
  sortIconSize: '12px',
  sortIconColor: '#ffffff',
  sortIconOpacity: '0.5',
  sortIconHoverOpacity: '1',

  // Pagination
  paginationSize: '32px',
  paginationFontSize: '12px',
  paginationColor: '#4B5EAA',
  paginationBorderColor: '#d9d9d9',

  // Spacing
  tablePadding: '16px',
  tableMargin: '16px 0',
  borderRadius: '8px',
};

const useStyle = createStyles(({ css }, customTheme = {}) => {
  const theme = { ...defaultTheme, ...customTheme };

  return {
    customTable: css`
      .ant-table {
        .ant-table-container {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          border-radius: ${theme.borderRadius};
          overflow: hidden;
        }

        .ant-table-header {
          height: ${theme.headerHeight} !important;
          max-height: ${theme.headerHeight} !important;
          min-height: ${theme.headerHeight} !important;
          padding: 0 !important;
          margin: 0 !important;
          background: ${theme.headerBgColor} !important;
        }

        .ant-table-thead {
          height: ${theme.headerHeight} !important;

          > tr {
            height: ${theme.headerHeight} !important;

            > th {
              height: ${theme.headerHeight} !important;
              line-height: ${theme.headerHeight} !important;
              padding: ${theme.headerPadding} !important;
              background: ${theme.headerBgColor} !important;
              border: none !important;
              font-size: ${theme.headerFontSize} !important;
              font-weight: ${theme.headerFontWeight} !important;
              color: ${theme.headerTextColor} !important;

              &.ant-table-cell {
                height: ${theme.headerHeight} !important;
                line-height: ${theme.headerHeight} !important;
              }

              .ant-table-column-title {
                height: ${theme.headerHeight} !important;
                line-height: ${theme.headerHeight} !important;
              }

              &.ant-table-selection-column {
                padding: 0 4px !important;
                width: ${theme.selectionColumnWidth} !important;
                min-width: ${theme.selectionColumnWidth} !important;

                .ant-checkbox-wrapper {
                  transform: scale(0.9);
                  
                  .ant-checkbox-inner {
                    width: ${theme.checkboxSize};
                    height: ${theme.checkboxSize};
                    border-color: ${theme.checkboxColor};
                    
                    &::after {
                      border-color: ${theme.checkboxColor};
                    }
                  }
                }
              }
            }
          }
        }

        .ant-table-tbody {
          > tr {
            &:nth-child(even) {
              background: ${theme.evenRowBgColor};
            }
            
            &:nth-child(odd) {
              background: ${theme.oddRowBgColor};
            }

            > td {
              height: ${theme.rowHeight} !important;
              line-height: ${theme.rowHeight} !important;
              padding: ${theme.rowPadding} !important;
              font-size: ${theme.rowFontSize} !important;
              border-bottom: 1px solid ${theme.rowBorderColor};

              &.ant-table-selection-column {
                padding: 0 4px !important;
                width: ${theme.selectionColumnWidth} !important;
                min-width: ${theme.selectionColumnWidth} !important;
              }
            }

            &:hover > td {
              background: ${theme.rowHoverBgColor} !important;
            }
          }
        }

        .ant-pagination {
          margin: ${theme.tableMargin} !important;
          padding: ${theme.tablePadding} !important;

          .ant-pagination-item,
          .ant-pagination-prev,
          .ant-pagination-next {
            min-width: ${theme.paginationSize} !important;
            height: ${theme.paginationSize} !important;
            line-height: ${parseInt(theme.paginationSize) - 2}px !important;
            border-color: ${theme.paginationBorderColor};

            a {
              font-size: ${theme.paginationFontSize} !important;
              color: ${theme.paginationColor};
            }

            &.ant-pagination-item-active {
              border-color: ${theme.paginationColor};
              
              a {
                color: ${theme.paginationColor};
              }
            }
          }
        }

        .ant-table-column-sorter {
          color: ${theme.sortIconColor};
          opacity: ${theme.sortIconOpacity};
          font-size: ${theme.sortIconSize};

          &:hover {
            opacity: ${theme.sortIconHoverOpacity};
          }
        }
      }
    `,
    tableWrapper: css`
      height: calc(100vh - 180px);
      display: flex;
      flex-direction: column;
    `
  };
});

const formatColumnTitle = (title) => {
  // Handle special cases
  switch (title) {
    case 'RollNo':
      return 'Roll No';
    case 'EnrollmentDate':
      return 'Enrollment Date';
    default:
      return title;
  }
};

const UIKitTable = ({
  columns = [],
  data = [],
  theme = {},
  headerHeight,
  headerBgColor,
  headerTextColor,
  headerFontSize,
  headerFontWeight,
  headerPadding,
  rowHeight,
  rowFontSize,
  rowPadding,
  rowBorderColor,
  rowHoverBgColor,
  evenRowBgColor,
  oddRowBgColor,
  selectionColumnWidth,
  checkboxSize,
  checkboxColor,
  sortIconSize,
  sortIconColor,
  sortIconOpacity,
  sortIconHoverOpacity,
  paginationSize,
  paginationFontSize,
  paginationColor,
  paginationBorderColor,
  tablePadding,
  tableMargin,
  borderRadius,
  enableRowSelection = false,
  selectionType = 'checkbox',
  enableSorting = true,
  enablePagination = true,
  pageSize = 10,
  enableSearch = true,
  searchPlaceholder = 'Search table...',
  enableExport = false,
  exportFileName = 'table-data',
  enableColumnDrag = false,
  enableScrolling = true,
  enableScrollbar = true,
  scrollHeight,
  fixedHeader = true,
  onRowClick,
  onRowSelection,
  onSort,
  onPageChange,
  onSearch,
  onExport,
  onColumnDrag,
  loading = false,
  size = 'middle',
  forceFixedRowHeight = false,
  cellPadding = 'sm',
  editMode = 'column',
  rowColors = ['#ffffff', '#f9f9f9'],
  sortConfig = { key: null, direction: null },
  descriptionWidth = 300,
  descriptionMaxWidth,
  includeDescription = true,
  maxDescriptionLength = 500,
  enableWordBreak = true,
  currentPage = 1,
  totalPages = 1,
  visiblePages = [],
  searchQuery = '',
  selectedRowKeys = [],
  selectedRows = [],
  editingRow = null,
  editingColumn = null,
  editedRowData = {},
  onEditStart,
  onEditChange,
  onSave,
  onCancel,
  onSelectionTypeChange,
  ...restProps
}) => {
  // Combine theme props with default theme
  const customTheme = {
    ...defaultTheme,
    headerHeight: headerHeight || defaultTheme.headerHeight,
    headerBgColor: headerBgColor || defaultTheme.headerBgColor,
    headerTextColor: headerTextColor || defaultTheme.headerTextColor,
    headerFontSize: headerFontSize || defaultTheme.headerFontSize,
    headerFontWeight: headerFontWeight || defaultTheme.headerFontWeight,
    headerPadding: headerPadding || defaultTheme.headerPadding,
    rowHeight: rowHeight || defaultTheme.rowHeight,
    rowFontSize: rowFontSize || defaultTheme.rowFontSize,
    rowPadding: rowPadding || defaultTheme.rowPadding,
    rowBorderColor: rowBorderColor || defaultTheme.rowBorderColor,
    rowHoverBgColor: rowHoverBgColor || defaultTheme.rowHoverBgColor,
    evenRowBgColor: evenRowBgColor || defaultTheme.evenRowBgColor,
    oddRowBgColor: oddRowBgColor || defaultTheme.oddRowBgColor,
    selectionColumnWidth: selectionColumnWidth || defaultTheme.selectionColumnWidth,
    checkboxSize: checkboxSize || defaultTheme.checkboxSize,
    checkboxColor: checkboxColor || defaultTheme.checkboxColor,
    sortIconSize: sortIconSize || defaultTheme.sortIconSize,
    sortIconColor: sortIconColor || defaultTheme.sortIconColor,
    sortIconOpacity: sortIconOpacity || defaultTheme.sortIconOpacity,
    sortIconHoverOpacity: sortIconHoverOpacity || defaultTheme.sortIconHoverOpacity,
    paginationSize: paginationSize || defaultTheme.paginationSize,
    paginationFontSize: paginationFontSize || defaultTheme.paginationFontSize,
    paginationColor: paginationColor || defaultTheme.paginationColor,
    paginationBorderColor: paginationBorderColor || defaultTheme.paginationBorderColor,
    tablePadding: tablePadding || defaultTheme.tablePadding,
    tableMargin: tableMargin || defaultTheme.tableMargin,
    borderRadius: borderRadius || defaultTheme.borderRadius,
    ...theme
  };

  const { styles } = useStyle(customTheme);

  // Debug logging
  console.log('UIKitTable render:', {
    dataLength: data?.length,
    columnsLength: columns?.length,
    data: data?.slice(0, 2), // Log first two items for debugging
    columns,
    currentPage,
    pageSize,
    enablePagination,
    sortConfig
  });

  // Validate data and columns
  if (!Array.isArray(data) || data.length === 0) {
    console.log('No data available for table');
    return (
      <div className={styles.tableWrapper}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-gray-400 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No data available</h3>
            <p className="mt-1 text-sm text-gray-500">
              There are no items to display in this table.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!Array.isArray(columns) || columns.length === 0) {
    console.error('No columns defined for table');
    return null;
  }

  const getSortIconSizeClass = (size) => {
    const sizeMap = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' };
    return sizeMap[size] || 'w-3 h-3';
  };

  const getHeaderFontSizeClass = (size) => {
    const sizeMap = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };
    return sizeMap[size] || 'text-sm';
  };

  const cellPaddingClass = (padding) => {
    const paddingMap = { sm: 'px-2 py-1', md: 'px-3 py-1.5', lg: 'px-4 py-2' };
    return paddingMap[padding] || 'px-2 py-1';
  };

  const inputPaddingClass = { sm: 'px-1 py-0.5', md: 'px-2 py-1', lg: 'px-3 py-1.5' }[cellPadding] || 'px-1 py-0.5';

  const getSortIcon = (column) => {
    const isActive = sortConfig?.key === column;
    const direction = sortConfig?.direction;
    
    if (!isActive) {
      return <FaSort className="text-white opacity-50 hover:opacity-100 transition-opacity" />;
    }
    
    if (direction === 'asc') {
      return <FaSortUp className="text-white" />;
    }
    
    if (direction === 'desc') {
      return <FaSortDown className="text-white" />;
    }
    
    return <FaSort className="text-white opacity-50 hover:opacity-100 transition-opacity" />;
  };

  const getRowColor = (index) => {
    if (!Array.isArray(rowColors) || rowColors.length === 0) return '#ffffff';
    return rowColors.length === 1 ? rowColors[0] : rowColors[index % 2];
  };

  const rowHeightClass = forceFixedRowHeight
    ? { sm: 'h-6', md: 'h-8', lg: 'h-10' }[rowHeight] || 'h-6'
    : { sm: 'min-h-6', md: 'min-h-8', lg: 'min-h-10' }[rowHeight] || 'min-h-6';

  console.log('UIKitTable - editMode:', editMode);
  console.log('UIKitTable - enableScrollbar:', enableScrollbar);
  console.log('UIKitTable - descriptionWidth:', descriptionWidth);
  console.log('UIKitTable - descriptionMaxWidth:', descriptionMaxWidth);
  console.log('UIKitTable - enableWordBreak:', enableWordBreak);
  console.log('UIKitTable - columns:', columns);

  // Convert columns to antd format with fixed columns support
  const antColumns = columns.map((col, index) => ({
    title: (
      <div className="flex items-center justify-between w-full">
        <span>{formatColumnTitle(col)}</span>
        {col !== 'Action' && enableSorting && (
          <span 
            className="cursor-pointer ml-1 hover:opacity-100" 
            onClick={(e) => {
              e.stopPropagation();
              if (sortConfig?.key === col && sortConfig?.direction === 'desc') {
                onSort?.(null);
              } else {
                onSort?.(col);
              }
            }}
          >
            {getSortIcon(col)}
          </span>
        )}
      </div>
    ),
    dataIndex: col,
    key: col,
    fixed: index === 0 || col === 'Action' ? (index === 0 ? 'left' : 'right') : undefined,
    width: (() => {
      switch (col) {
        case 'Name':
          return 120;
        case 'RollNo':
          return 80;
        case 'Grade':
          return 70;
        case 'Marks':
          return 70;
        case 'Status':
          return 90;
        case 'Address':
          return 200;
        case 'Email':
          return 180;
        case 'Phone':
          return 140;
        case 'Description':
          return descriptionWidth || 300;
        case 'Age':
          return 60;
        case 'EnrollmentDate':
          return 110;
        case 'Department':
          return 140;
        case 'Semester':
          return 120;
        case 'Advisor':
          return 120;
        case 'Activities':
          return 100;
        case 'GPA':
          return 70;
        case 'Credits':
          return 80;
        case 'Action':
          return 80;
        default:
          return 100;
      }
    })(),
    className: `${getHeaderFontSizeClass(headerFontSize)} ${cellPaddingClass(cellPadding)} ${
      index === 0 ? 'column-fixed-left' : col === 'Action' ? 'column-fixed-right' : ''
    }`,
    render: (text, record, rowIndex) => {
      if (editingRow === rowIndex && editingColumn === col) {
        const inputProps = {
          type: col === 'Age' ? 'number' : 'text',
          value: editedRowData[col] || text || '',
          onChange: (e) => onEditChange?.(col, e.target.value),
          className: 'w-full border rounded px-2 py-1',
          style: {
            minHeight: '28px',
            fontSize: '13px'
          }
        };

        const EditButtons = () => (
          <div className="flex gap-2 mt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSave?.();
              }}
              className="px-3 py-1 bg-[#4B5EAA] text-white rounded text-xs hover:bg-[#3A4C7D] transition-colors"
            >
              Save
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCancel?.();
              }}
              className="px-3 py-1 border border-[#4B5EAA] text-[#4B5EAA] rounded text-xs hover:bg-[#4B5EAA] hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        );

        if (col === 'Description') {
          return (
            <div className="flex flex-col gap-2">
              <textarea
                {...inputProps}
                rows={3}
                maxLength={maxDescriptionLength}
                style={{
                  ...inputProps.style,
                  resize: 'vertical',
                  minHeight: '60px'
                }}
              />
              <EditButtons />
            </div>
          );
        }

        return (
          <div className="flex flex-col gap-2">
            <input {...inputProps} />
            <EditButtons />
          </div>
        );
      }

      switch (col) {
        case 'Status':
          return (
            <span className={`px-2 py-1 rounded text-sm ${
              text === 'Pass' ? 'bg-green-100 text-green-800' :
              text === 'Fail' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {text}
            </span>
          );
        case 'Description':
          return (
            <div
              className={`${enableWordBreak ? 'break-words' : 'whitespace-nowrap'} min-h-[24px]`}
              style={{
                maxWidth: descriptionMaxWidth || 'none',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {text || (
                <span className="text-gray-400 italic">
                  Click to add description...
                </span>
              )}
            </div>
          );
        case 'Action':
          return (
            <div className="action-column">
              <a 
                onClick={(e) => {
                  e.stopPropagation();
                  onEditStart?.(rowIndex, col);
                }}
                className="text-[#4B5EAA] hover:underline cursor-pointer"
              >
                Edit
              </a>
            </div>
          );
        default:
          return text;
      }
    },
    onCell: (record, rowIndex) => ({
      onClick: (e) => {
        if (onRowClick) {
          e.stopPropagation();
          onRowClick(record, rowIndex);
        }
      },
      style: {
        cursor: onRowClick ? 'pointer' : 'default'
      }
    })
  }));

  // Pagination configuration
  const paginationConfig = currentPage ? {
    current: currentPage,
    total: totalPages * (data.length / visiblePages.length || 10),
    pageSize: data.length / visiblePages.length || 10,
    onChange: onPageChange,
    showSizeChanger: true,
    showTotal: (total) => `Total ${total} items`,
  } : false;

  return (
    <div className={styles.tableWrapper}>
      <div className="space-y-2">
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              {enableRowSelection && (
                <>
                  <Radio.Group 
                    onChange={onSelectionTypeChange} 
                    value={selectionType}
                    className="mb-4 flex items-center space-x-4"
                  >
                    <Radio value="checkbox" className="text-[#4B5EAA]">Checkbox</Radio>
                    <Radio value="radio" className="text-[#4B5EAA]">Radio</Radio>
                  </Radio.Group>
                  <Divider type="vertical" className="bg-[#4B5EAA] h-6" />
                </>
              )}
              {enableSearch && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="px-3 py-1 border rounded w-56 text-sm"
                  placeholder={searchPlaceholder}
                />
              )}
            </div>
            {enableRowSelection && enableExport && selectedRowKeys.length > 0 && (
              <button
                onClick={onExport}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
              >
                Export Selected ({selectedRowKeys.length})
              </button>
            )}
          </div>
          
          <Table
            className={styles.customTable}
            columns={antColumns}
            dataSource={data}
            size={size}
            loading={loading}
            pagination={enablePagination ? {
              position: ['bottom'],
              current: currentPage,
              total: data.length,
              pageSize: pageSize,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total) => `Total ${total} items`,
              pageSizeOptions: ['10', '20', '50', '100'],
              onChange: (page, pageSize) => onPageChange?.(page, pageSize)
            } : false}
            scroll={{
              x: enableScrolling && enableScrollbar ? 'max-content' : undefined,
              y: enableScrolling && enableScrollbar ? scrollHeight || 'calc(100vh - 300px)' : undefined
            }}
            rowClassName={(record, index) => 
              `${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`
            }
            rowKey={(record) => record.key || record.id || index}
            components={{
              header: {
                cell: (props) => (
                  <th
                    {...props}
                    data-column={props['data-column'] || props.children?.[0]?.key}
                    style={{
                      backgroundColor: headerBgColor || '#4B5EAA',
                      color: headerTextColor || 'white',
                      ...props.style,
                    }}
                  />
                ),
                row: (props) => <tr {...props} />
              },
              body: {
                cell: (props) => (
                  <td
                    {...props}
                    data-column={props['data-column'] || props.children?.[0]?.key}
                  />
                ),
                row: (props) => <tr {...props} />
              }
            }}
            rowSelection={enableRowSelection ? {
              type: selectionType,
              columnTitle: ' ',
              columnWidth: 40,
              fixed: true,
              selectedRowKeys: selectedRowKeys,
              onChange: (selectedRowKeys, selectedRows) => {
                onRowSelection?.(selectedRowKeys, selectedRows);
              },
              getCheckboxProps: (record) => ({
                disabled: disabledRows?.includes(record.key),
                name: record.name,
                className: 'custom-checkbox',
              }),
              renderCell: (checked, record, index, originNode) => {
                return React.cloneElement(originNode, {
                  style: {
                    '--ant-primary-color': checkboxColor || '#4B5EAA',
                    '--ant-primary-color-hover': checkboxColor || '#4B5EAA',
                  },
                });
              },
            } : undefined}
            {...restProps}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(UIKitTable);


