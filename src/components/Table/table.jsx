import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

export const UIKitTable = ({
  columns,
  data,
  headerColor = '#4B5EAA',
  showSortIcons = true,
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (col) => {
    let direction = 'asc';
    if (sortConfig.key === col && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: col, direction });
  };

  // Sorting the data
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let valA = a[sortConfig.key]?.toString().replace('$', '') || '';
    let valB = b[sortConfig.key]?.toString().replace('$', '') || '';

    const isNumeric = !isNaN(valA) && !isNaN(valB);

    if (isNumeric) {
      return sortConfig.direction === 'asc'
        ? parseFloat(valA) - parseFloat(valB)
        : parseFloat(valB) - parseFloat(valA);
    } else {
      return sortConfig.direction === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }
  });

  return (
    <div className="relative">
      <div className="shadow rounded-lg border border-gray-200">
        <table className="min-w-full text-sm text-left bg-white">
          <thead
            style={{ backgroundColor: headerColor }}
            className="text-white sticky top-0 z-10"
          >
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  onClick={() => handleSort(col)}
                  className="px-4 py-3 font-semibold cursor-pointer border-r border-white last:border-r-0"
                >
                  <div className="flex items-center">
                    {col}
                    {showSortIcons && sortConfig.key === col && (
                      sortConfig.direction === 'asc' ? (
                        <FaSortUp className="ml-1 text-white" />
                      ) : (
                        <FaSortDown className="ml-1 text-white" />
                      )
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {columns.map((col, i) => (
                  <td key={i} className="px-4 py-2">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};