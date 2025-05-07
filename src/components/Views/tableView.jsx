
import React from 'react';
import { UIKitTable } from '../Table/table';

export const TableView = () => {
  const columns = ['Product', 'Price', 'Category', 'Stock', 'Rating'];

  const data = [
    { Product: 'Laptop', Price: '$1200', Category: 'Electronics', Stock: 'Available', Rating: '4.5' },
    { Product: 'Chair', Price: '$80', Category: 'Furniture', Stock: 'Out of Stock', Rating: '4.2' },
    { Product: 'Book', Price: '$15', Category: 'Education', Stock: 'Available', Rating: '4.9' },
    { Product: 'Headphones', Price: '$200', Category: 'Electronics', Stock: 'Available', Rating: '4.3' },
    { Product: 'Coffee Mug', Price: '$12', Category: 'Kitchen', Stock: 'Limited', Rating: '4.0' },
    { Product: 'Drop-Leaf Desk', Price: '$250', Category: 'Furniture', Stock: 'Available', Rating: '4.7' },
  ];

  const tableConfigs = [
    { title: 'Primary Inventory Table', headerColor: '#4B5EAA', scrollEnabled: true },
    { title: 'Green Themed Table', headerColor: 'seagreen', scrollEnabled: false },
  ];

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-3xl font-bold text-[#4B5EAA] text-center">Inventory Table</h2>

      {tableConfigs.map((config, index) => (
        <div key={index} className="space-y-2">
          <h3 className="text-xl font-semibold text-center text-gray-700">{config.title}</h3>
          <UIKitTable
            columns={columns}
            data={data}
            headerColor={config.headerColor}
            scrollEnabled={config.scrollEnabled}
            showSortIcons={true} // 🔸 sorting icons enabled
          />
        </div>
      ))}
    </div>
  );
};
