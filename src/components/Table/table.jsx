// import { memo } from 'react';
// import { FaSortUp, FaSortDown } from 'react-icons/fa';
// import { FaSort } from 'react-icons/fa6';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const UIKitTable = ({
//   columns,
//   data,
//   headerColor,
//   rowColors,
//   sortConfig,
//   editingRow,
//   editedRowData,
//   showConfirmation,
//   currentPage,
//   totalPages,
//   visiblePages,
//   searchQuery,
//   enableRowSelection,
//   selectedRows,
//   editableColumns,
//   editMode,
//   enableExport,
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
// }) => {
//   const getSortIcon = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === 'asc' ? (
//         <FaSortUp className="ml-1 text-white" />
//       ) : (
//         <FaSortDown className="ml-1 text-white" />
//       );
//     }
//     return <FaSort className="ml-1 text-white" />;
//   };

//   const getRowColor = (index) => {
//     if (!Array.isArray(rowColors) || rowColors.length === 0) {
//       return '#ffffff';
//     }
//     if (rowColors.length === 1) {
//       return rowColors[0];
//     }
//     return rowColors[index % 2];
//   };

//   return (
//     <div className="p-6 space-y-10">
//       <h2 className="text-3xl font-bold text-[#4B5EAA] text-center">Student Records Table</h2>
//       <div className="space-y-2">
//         <h3 className="text-xl font-semibold text-center text-gray-700">Primary Student Table</h3>
//         <div className="relative">
//           <div className="flex items-center justify-between mb-4">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => onSearch(e.target.value)}
//               className="px-4 py-2 border rounded w-64"
//               placeholder="Search table..."
//             />
//             {enableRowSelection && enableExport && selectedRows.length > 0 && (
//               <button
//                 onClick={onExport}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Export Selected ({selectedRows.length})
//               </button>
//             )}
//           </div>
//           <div className="shadow rounded-lg border border-gray-200">
//             <table className="min-w-full text-sm text-left bg-white">
//               <thead
//                 style={{ backgroundColor: headerColor }}
//                 className="text-white sticky top-0 z-10"
//               >
//                 <tr>
//                   {enableRowSelection && (
//                     <th className="px-4 py-3 border-r border-white">
//                       <input
//                         type="checkbox"
//                         checked={selectedRows.length === data.length}
//                         onChange={(e) => onSelectAll(e.target.checked)}
//                         className="cursor-pointer"
//                       />
//                     </th>
//                   )}
//                   {columns.map((col, idx) => (
//                     <th
//                       key={idx}
//                       onClick={() => onSort(col)}
//                       className="px-4 py-3 font-semibold cursor-pointer border-r border-white last:border-r-0"
//                     >
//                       <div className="flex items-center">
//                         {col}
//                         {getSortIcon(col)}
//                       </div>
//                     </th>
//                   ))}
//                   {editMode === 'row' && (
//                     <th className="px-4 py-3 border-r border-white">Actions</th>
//                   )}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {data.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={columns.length + (enableRowSelection ? 1 : 0) + (editMode === 'row' ? 1 : 0)}
//                       className="px-4 py-2 text-center text-gray-500"
//                     >
//                       No data available
//                     </td>
//                   </tr>
//                 ) : (
//                   data.map((row, rowIndex) => (
//                     <tr
//                       key={rowIndex}
//                       className="hover:bg-gray-50"
//                       style={{ backgroundColor: getRowColor(rowIndex) }}
//                     >
//                       {enableRowSelection && (
//                         <td className="px-4 py-2">
//                           <input
//                             type="checkbox"
//                             checked={selectedRows.includes(
//                               (currentPage - 1) * (data.length / totalPages) + rowIndex
//                             )}
//                             onChange={() =>
//                               onRowSelection(
//                                 (currentPage - 1) * (data.length / totalPages) + rowIndex
//                               )
//                             }
//                             className="cursor-pointer"
//                           />
//                         </td>
//                       )}
//                       {columns.map((col, colIndex) => (
//                         <td key={colIndex} className="px-4 py-2">
//                           {editingRow === rowIndex &&
//                           (editMode === 'row' || editableColumns.includes(col)) ? (
//                             <input
//                               type="text"
//                               value={editedRowData[col] || row[col] || ''}
//                               onChange={(e) => onEditChange(col, e.target.value)}
//                               className="w-full border border-gray-300 rounded px-2 py-1"
//                               autoFocus={colIndex === 0}
//                             />
//                           ) : (
//                             <span
//                               onClick={() =>
//                                 (editMode === 'row' || editableColumns.includes(col)) &&
//                                 onEditStart(rowIndex)
//                               }
//                               className={`${
//                                 editMode === 'row' || editableColumns.includes(col)
//                                   ? 'cursor-text'
//                                   : ''
//                               }`}
//                             >
//                               {row[col]}
//                             </span>
//                           )}
//                         </td>
//                       ))}
//                       {editMode === 'row' && (
//                         <td className="px-4 py-2">
//                           {editingRow === rowIndex ? (
//                             <div className="flex space-x-2">
//                               <button
//                                 onClick={onSave}
//                                 className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                               >
//                                 Save
//                               </button>
//                               <button
//                                 onClick={onCancel}
//                                 className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           ) : (
//                             <button
//                               onClick={() => onEditStart(rowIndex)}
//                               className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
//                             >
//                               Edit
//                             </button>
//                           )}
//                         </td>
//                       )}
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex justify-center items-center mt-4">
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={onPrevious}
//                 disabled={currentPage === 1}
//                 className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
//               >
//                 <FaArrowLeft className="text-gray-600" />
//               </button>
//               {visiblePages.map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => onPageChange(page)}
//                   className={`px-3 py-1 rounded border ${
//                     currentPage === page
//                       ? 'bg-blue-500 text-white border-blue-500'
//                       : 'border-blue-500 text-blue-500'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
//               <button
//                 onClick={onNext}
//                 disabled={currentPage === totalPages}
//                 className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
//               >
//                 <FaArrowRight className="text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold mb-4">Confirm Action</h3>
//             <p className="mb-6">Do you want to save or discard your changes?</p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={() => onConfirmAction('discard')}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//               >
//                 Discard
//               </button>
//               <button
//                 onClick={() => onConfirmAction('save')}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Save
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
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { FaSort } from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const UIKitTable = ({
  columns,
  data,
  headerColor,
  rowColors,
  sortConfig,
  editingRow,
  editedRowData,
  showConfirmation,
  currentPage,
  totalPages,
  visiblePages,
  searchQuery,
  enableRowSelection,
  selectedRows,
  editableColumns,
  editMode,
  enableExport,
  rowHeight,
  cellPadding,
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
}) => {
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? (
        <FaSortUp className="ml-1 text-white" />
      ) : (
        <FaSortDown className="ml-1 text-white" />
      );
    }
    return <FaSort className="ml-1 text-white" />;
  };

  const getRowColor = (index) => {
    if (!Array.isArray(rowColors) || rowColors.length === 0) {
      return '#ffffff';
    }
    if (rowColors.length === 1) {
      return rowColors[0];
    }
    return rowColors[index % 2];
  };

  const rowHeightClass = {
    sm: 'h-8', // 32px
    md: 'h-10', // 40px
    lg: 'h-12', // 48px
  }[rowHeight] || 'h-8';

  const cellPaddingClass = {
    sm: 'px-2 py-1',
    md: 'px-3 py-1.5',
    lg: 'px-4 py-2',
  }[cellPadding] || 'px-2 py-1';

  const inputPaddingClass = {
    sm: 'px-1 py-0.5',
    md: 'px-2 py-1',
    lg: 'px-3 py-1.5',
  }[cellPadding] || 'px-1 py-0.5';

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-[#4B5EAA] text-center">Student Records Table</h2>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-center text-gray-700">Primary Student Table</h3>
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
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
          <div className="shadow rounded-lg border border-gray-200 overflow-x-auto">
            <table className="min-w-full text-sm text-left bg-white table-auto" role="grid">
              <thead
                style={{ backgroundColor: headerColor }}
                className="text-white sticky top-0 z-10"
              >
                <tr className={rowHeightClass}>
                  {enableRowSelection && (
                    <th className={`${cellPaddingClass} border-r border-white`}>
                      <input
                        type="checkbox"
                        checked={selectedRows.length === data.length}
                        onChange={(e) => onSelectAll(e.target.checked)}
                        className="cursor-pointer"
                        aria-label="Select all rows"
                      />
                    </th>
                  )}
                  {columns.map((col, idx) => (
                    <th
                      key={idx}
                      onClick={() => onSort(col)}
                      className={`${cellPaddingClass} font-semibold cursor-pointer border-r border-white last:border-r-0`}
                      role="columnheader"
                      aria-sort={sortConfig.key === col ? sortConfig.direction : 'none'}
                    >
                      <div className="flex items-center">
                        {col}
                        {getSortIcon(col)}
                      </div>
                    </th>
                  ))}
                  {editMode === 'row' && (
                    <th className={`${cellPaddingClass} border-r border-white`} aria-hidden="true">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.length === 0 ? (
                  <tr className={rowHeightClass}>
                    <td
                      colSpan={columns.length + (enableRowSelection ? 1 : 0) + (editMode === 'row' ? 1 : 0)}
                      className={`${cellPaddingClass} text-center text-gray-500`}
                    >
                      No data available
                    </td>
                  </tr>
                ) : (
                  data.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`hover:bg-gray-50 table-row ${rowHeightClass}`}
                      style={{ backgroundColor: getRowColor(rowIndex) }}
                      role="row"
                    >
                      {enableRowSelection && (
                        <td className={`${cellPaddingClass} table-cell`}>
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(
                              (currentPage - 1) * (data.length / totalPages) + rowIndex
                            )}
                            onChange={() =>
                              onRowSelection(
                                (currentPage - 1) * (data.length / totalPages) + rowIndex
                              )
                            }
                            className="cursor-pointer"
                            aria-label={`Select row ${rowIndex + 1}`}
                          />
                        </td>
                      )}
                      {columns.map((col, colIndex) => (
                        <td key={colIndex} className={`${cellPaddingClass} table-cell`}>
                          {editingRow === rowIndex &&
                          (editMode === 'row' || editableColumns.includes(col)) ? (
                            <input
                              type="text"
                              value={editedRowData[col] || row[col] || ''}
                              onChange={(e) => onEditChange(col, e.target.value)}
                              className={`w-full border border-gray-300 rounded ${inputPaddingClass} text-sm`}
                              autoFocus={colIndex === 0}
                              aria-label={`Edit ${col} for row ${rowIndex + 1}`}
                            />
                          ) : (
                            <span
                              onClick={() =>
                                (editMode === 'row' || editableColumns.includes(col)) &&
                                onEditStart(rowIndex)
                              }
                              className={`${
                                editMode === 'row' || editableColumns.includes(col)
                                  ? 'cursor-text'
                                  : ''
                              }`}
                            >
                              {row[col]}
                            </span>
                          )}
                        </td>
                      ))}
                      {editMode === 'row' && (
                        <td className={`${cellPaddingClass} table-cell`}>
                          {editingRow === rowIndex ? (
                            <div className="flex space-x-1">
                              <button
                                onClick={onSave}
                                className="px-2 py-0.5 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs"
                                aria-label="Save changes"
                              >
                                Save
                              </button>
                              <button
                                onClick={onCancel}
                                className="px-2 py-0.5 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-xs"
                                aria-label="Cancel editing"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => onEditStart(rowIndex)}
                              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 text-xs"
                              aria-label={`Edit row ${rowIndex + 1}`}
                            >
                              Edit
                            </button>
                          )}
                        </td>
                      )}
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
                  onClick={() => onPageChange(page)}
                  className={`px-2 py-0.5 rounded border text-sm ${
                    currentPage === page
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-blue-500 text-blue-500'
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

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-base font-semibold mb-3">Confirm Action</h3>
            <p className="mb-4 text-sm">Do you want to save or discard your changes?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => onConfirmAction('discard')}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm"
                aria-label="Discard changes"
              >
                Discard
              </button>
              <button
                onClick={() => onConfirmAction('save')}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                aria-label="Save changes"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(UIKitTable);