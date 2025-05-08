import React, { useState } from 'react';
import UIKitCheckbox from '../Checkbox/Checkbox';

const CheckboxView = () => {
  const [selectedCheckboxProps, setSelectedCheckboxProps] = useState(null);

  const checkboxes = [
    {
      label: 'Default Blue (MD)',
      color: 'blue',
      size: 'md',
      variant: 'default'
    },
    {
      label: 'Rounded Green (LG)',
      color: 'green',
      size: 'lg',
      variant: 'rounded'
    },
    {
      label: 'Square Red (SM)',
      color: 'red',
      size: 'sm',
      variant: 'square'
    },
    {
      label: 'Outline Blue (MD)',
      color: 'blue',
      size: 'md',
      variant: 'outline'
    },
    {
      label: 'Filled Green (LG)',
      color: 'green',
      size: 'lg',
      variant: 'filled'
    },
    {
      label: 'Disabled Red (MD)',
      color: 'red',
      size: 'md',
      variant: 'default',
      disabled: true
    },
    {
      label: 'Custom Appearance',
      color: 'blue',
      size: 'md',
      variant: 'custom',
      customClass: 'bg-yellow-200 checked:bg-yellow-500 border-yellow-500'
    }
  ];

  const handleCheckboxClick = (props) => {
    setSelectedCheckboxProps(props);
  };

  const handleCopy = () => {
    if (selectedCheckboxProps) {
      const propsString = `<UIKitCheckbox ${Object.entries(selectedCheckboxProps)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedCheckboxProps(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Custom Checkbox</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {checkboxes.map((checkboxProps, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleCheckboxClick(checkboxProps)}
          >
            <UIKitCheckbox {...checkboxProps} />
          </div>
        ))}
      </div>

      {selectedCheckboxProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Checkbox Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitCheckbox ${Object.entries(selectedCheckboxProps)
                .map(([key, value]) => `${key}="${value}"`)
                .join(' ')} />`}
            </pre>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCopy}
              >
                Copy Code
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckboxView;