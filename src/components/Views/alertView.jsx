import React, { useState } from 'react';
import { UIKitAlert } from '../Alert/alert';
import { Toast } from '../Alert/toast';

export const AlertView = () => {
  const [showToast, setShowToast] = useState(false);
  const [selectedProps, setSelectedProps] = useState(null);

  const alerts = [
    {
      type: 'success',
      message: 'Success! Everything went well.',
      heading: 'Success'
    },
    {
      type: 'error',
      message: 'Error! Something went wrong.',
      heading: 'Error'
    },
    {
      type: 'warning',
      message: 'Warning! Please be careful.',
      heading: 'Warning'
    },
    {
      type: 'info',
      message: 'Info! Here’s a helpful message.',
      heading: 'Information'
    }
  ];

  const toastConfig = {
    type: 'success',
    message: 'Saved successfully!'
  };

  const triggerToast = () => {
    setShowToast(true);
  };

  const handleComponentClick = (props, componentType) => {
    setSelectedProps({ ...props, componentType });
  };

  const handleCopy = () => {
    if (selectedProps) {
      const { componentType, ...props } = selectedProps;
      const propsString = `<${componentType} ${Object.entries(props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedProps(null);
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-semibold text-center">Alert</h2>
      <div className="space-y-4">
        {alerts.map((alertProps, index) => (
          <div
            key={`alert-${index}`}
            className="cursor-pointer"
            onClick={() => handleComponentClick(alertProps, 'UIKitAlert')}
          >
            <UIKitAlert {...alertProps} />
          </div>
        ))}
      </div>

      <button
        onClick={triggerToast}
        className="bg-[#4B5EAA] text-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition-all duration-300"
      >
        Show Toast
      </button>

      {showToast && (
        <div
          className="cursor-pointer"
          onClick={() => handleComponentClick(toastConfig, 'Toast')}
        >
          <Toast
            type="success"
            message="Saved successfully!"
            onClose={() => setShowToast(false)}
          />
        </div>
      )}

      {selectedProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">{selectedProps.componentType} Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<${selectedProps.componentType} ${Object.entries(selectedProps)
                .filter(([key]) => key !== 'componentType')
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