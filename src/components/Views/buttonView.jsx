import React, { useState } from 'react';
import UIKitBtn from '../Button/Button';

const ButtonView = () => {
  const [selectedButtonProps, setSelectedButtonProps] = useState(null);

  const buttons = [
    {
      label: "Primary",
      type: "primary",
      shine: "medium",
      size: "md"
    },
    {
      label: "Success",
      type: "success",
      shine: "high",
      size: "lg",
      borderRadius: "rounded-xl"
    },
    {
      label: "Danger",
      type: "danger",
      shine: "low",
      size: "sm"
    },
    {
      label: "Secondary",
      type: "secondary",
      size: "md"
    },
    {
      label: "Purple Love",
      type: "customPurple",
      size: "md",
      fontSize: "text-lg"
    },
    {
      label: "Submit",
      type: "primary",
      width: "w-48",
      height: "h-10",
      padding: "px-3 py-1",
      fontSize: "text-sm"
    },
    {
      label: "Large Custom",
      type: "success",
      padding: "px-10 py-4",
      margin: "m-4",
      width: "w-60",
      height: "h-10",
      fontSize: "text-md",
      borderRadius: "rounded-xl"
    }
  ];

  const handleButtonClick = (props) => {
    setSelectedButtonProps(props);
  };

  const handleCopy = () => {
    if (selectedButtonProps) {
      navigator.clipboard.writeText(`<UIKitBtn ${Object.entries(selectedButtonProps)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} />`);
    }
  };

  const closeModal = () => {
    setSelectedButtonProps(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-10">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Buttons</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {buttons.map((btnProps, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleButtonClick(btnProps)}
          >
            <UIKitBtn {...btnProps} />
          </div>
        ))}
      </div>

      {selectedButtonProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Button Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitBtn ${Object.entries(selectedButtonProps)
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

export default ButtonView;