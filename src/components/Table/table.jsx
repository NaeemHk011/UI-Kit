
import { memo } from 'react';
import { FaSortUp, FaSortDown, FaArrowsAlt } from 'react-icons/fa';
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
  checkboxColumns,
  checkboxStates,
  sortIconSize,
  headerFontSize,
  enableColumnDrag,
  draggingColumn,
  dropTarget,
  enableScrollbar,
  includeDescription,
  maxDescriptionLength,
  modalConfig,
  descriptionWidth,
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
    const isActive = sortConfig.key === key;
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
    ? { sm: 'h-8 !important', md: 'h-10 !important', lg: 'h-12 !important' }[rowHeight] || 'h-8 !important'
    : { sm: 'h-8', md: 'h-10', lg: 'h-12' }[rowHeight] || 'h-8';

  const cellPaddingClass = { sm: 'px-2 py-1', md: 'px-3 py-1.5', lg: 'px-4 py-2' }[cellPadding] || 'px-2 py-1';
  const inputPaddingClass = { sm: 'px-1 py-0.5', md: 'px-2 py-1', lg: 'px-3 py-1.5' }[cellPadding] || 'px-1 py-0.5';

  const getColumnWidthClass = (col) => {
    if (col === 'Phone' || col === 'Email') return 'min-w-[100px] max-w-[100px]';
    if (col === 'Description') return `min-w-[${descriptionWidth}px] max-w-[${descriptionWidth}px]`;
    return 'min-w-[150px] max-w-[150px]';
  };

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
              className="px-3 py-1 border rounded w-56 text-sm truncate"
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
          <div className="w-full max-w-[1200px] overflow-hidden">
            <div
              className={`relative ${enableScrollbar ? 'overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100' : ''}`}
            >
              <table
                className={`w-full text-sm text-left bg-white table-auto border-collapse ${enableScrollbar ? 'min-w-[2000px]' : ''}`}
                role="grid"
              >
                <thead style={{ backgroundColor: headerColor }} className="text-white sticky top-0 z-10">
                  <tr className={rowHeightClass}>
                    {enableRowSelection && (
                      <th className={`${cellPaddingClass} ${getHeaderFontSizeClass(headerFontSize)} border-r border-white sticky left-0 bg-[${headerColor}] z-20 min-w-[50px] align-middle`}>
                        <input
                          type="checkbox"
                          checked={selectedRows.length === data.length}
                          onChange={(e) => onSelectAll(e.target.checked)}
                          className="cursor-pointer"
                          aria-label="Select all rows"
                        />
                      </th>
                    )}
                    {columns.map((col) => (
                      <th
                        key={col}
                        onClick={() => onSort(col)}
                        className={`group ${cellPaddingClass} ${getHeaderFontSizeClass(headerFontSize)} font-semibold cursor-pointer border-r border-white last:border-r-0 ${
                          draggingColumn === col ? 'bg-blue-700' : dropTarget === col ? 'bg-blue-500' : ''
                        } ${getColumnWidthClass(col)} align-middle overflow-hidden whitespace-nowrap !text-ellipsis`}
                        role="columnheader"
                        aria-sort={sortConfig.key === col ? sortConfig.direction : 'none'}
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
                                  onDragStart(col);
                                }}
                                onDragOver={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  onDragOver(e, col);
                                }}
                                onDragEnter={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  onDragOver(e, col);
                                }}
                                onDragLeave={(e) => e.stopPropagation()}
                                onDrop={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  onDrop(col);
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
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.length === 0 ? (
                    <tr className={`${rowHeightClass} overflow-hidden max-h-[${rowHeight === 'sm' ? '32px' : rowHeight === 'md' ? '40px' : '48px'}] !important`}>
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
                        className={`hover:bg-gray-50 table-row ${rowHeightClass} overflow-hidden max-h-[${rowHeight === 'sm' ? '32px' : rowHeight === 'md' ? '40px' : '48px'}] !important`}
                        style={{ backgroundColor: getRowColor(rowIndex) }}
                        role="row"
                      >
                        {enableRowSelection && (
                          <td className={`${cellPaddingClass} table-cell sticky left-0 bg-white z-10 min-w-[50px] align-middle`}>
                            <input
                              type="checkbox"
                              checked={selectedRows.includes(rowIndex)}
                              onChange={() => onRowSelection(rowIndex)}
                              className="cursor-pointer"
                              aria-label={`Select row ${rowIndex + 1}`}
                            />
                          </td>
                        )}
                        {columns.map((col) => (
                          <td
                            key={col}
                            className={`${cellPaddingClass} table-cell ${getColumnWidthClass(col)} overflow-hidden !whitespace-nowrap !text-ellipsis align-middle`}
                          >
                            {checkboxColumns.includes(col) && editingRow !== rowIndex ? (
                              <input
                                type="checkbox"
                                checked={checkboxStates[rowIndex]?.[col] || false}
                                onChange={(e) => onCheckboxChange(rowIndex, col, e.target.checked)}
                                className="cursor-pointer"
                                aria-label={`Toggle ${col} for row ${rowIndex + 1}`}
                                aria-checked={checkboxStates[rowIndex]?.[col] || false}
                              />
                            ) : editingRow === rowIndex &&
                              (editMode === 'row' || editableColumns.includes(col) || (includeDescription && col === 'Description')) ? (
                              <input
                                type="text"
                                value={editedRowData[col] || row[col] || ''}
                                onChange={(e) => onEditChange(col, e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    onSave();
                                  } else if (e.key === 'Escape') {
                                    onCancel();
                                  }
                                }}
                                className={`w-full max-w-full border border-gray-300 rounded ${inputPaddingClass} text-sm !truncate !overflow-hidden !text-ellipsis !whitespace-nowrap box-border !line-height-normal`}
                                maxLength={col === 'Description' && maxDescriptionLength ? maxDescriptionLength : undefined}
                                autoFocus={col === columns[0]}
                                aria-label={`Edit ${col} for row ${rowIndex + 1}`}
                              />
                            ) : (
                              <span
                                onClick={() =>
                                  (editMode === 'row' || editableColumns.includes(col) || (includeDescription && col === 'Description')) &&
                                  !checkboxColumns.includes(col) &&
                                  onEditStart(rowIndex)
                                }
                                className={`block !truncate !overflow-hidden !text-ellipsis !whitespace-nowrap cursor-text !line-height-normal`}
                              >
                                {row[col] || 'N/A'}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
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

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-base font-semibold mb-3">{modalConfig.title}</h3>
            <p className="mb-4 text-sm">{modalConfig.message}</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => onConfirmAction('discard')}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm"
                aria-label="Confirm discard changes"
              >
                {modalConfig.discardButtonText}
              </button>
              <button
                onClick={() => onConfirmAction('save')}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                aria-label="Confirm save changes"
              >
                {modalConfig.saveButtonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(UIKitTable);


















