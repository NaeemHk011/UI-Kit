import React from 'react';

export const UIKitTable = ({
  columns,
  data,
  headerColor = '#4B5EAA',
  scrollEnabled = true,
}) => {
  return (
    <div className={`relative overflow-y-auto max-h-64 shadow rounded-lg border border-gray-200`}>
      {scrollEnabled && (
        <>
          {/* Scroll Up Icon */}
          <div className="absolute top-1 right-1 z-10 bg-white shadow rounded-full p-1 cursor-pointer">
            <span className="block w-3 h-3 border-t-2 border-r-2 border-gray-500 transform rotate-45"></span>
          </div>

          {/* Scroll Down Icon */}
          <div className="absolute bottom-1 right-1 z-10 bg-white shadow rounded-full p-1 cursor-pointer">
            <span className="block w-3 h-3 border-b-2 border-r-2 border-gray-500 transform -rotate-45"></span>
          </div>
        </>
      )}

      {/* Table */}
      <table className="min-w-full bg-white text-sm text-left">
        <thead style={{ backgroundColor: headerColor }} className="text-white sticky top-0 z-10">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-3 font-semibold border-r border-white last:border-r-0">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
