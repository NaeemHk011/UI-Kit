import React, { useState } from 'react';
import UIKitFloat from '../Floatbuttons/floatbuttons';
import { FaArrowUp, FaPlus, FaHome, FaCog } from 'react-icons/fa';

const FloatView = () => {
  const [selectedFloatProps, setSelectedFloatProps] = useState(null);

  const floatConfig = {
    mainIcon: '<FaArrowUp />',
    mainColor: '#4caf50',
    mainHover: '#388e3c',
    position: 'bottom-right',
    childrenButtons: [
      {
        icon: '<FaPlus />',
        label: 'Add',
        bg: '#e91e63'
      },
      {
        icon: '<FaHome />',
        label: 'Home',
        bg: '#3f51b5'
      },
      {
        icon: '<FaCog />',
        label: 'Settings',
        bg: '#ff9800'
      }
    ]
  };

  const handleFloatClick = () => {
    setSelectedFloatProps(floatConfig);
  };

  const handleCopy = () => {
    if (selectedFloatProps) {
      const formatChildrenButtons = selectedFloatProps.childrenButtons
        .map(
          (btn) =>
            `{ icon: ${btn.icon}, label: "${btn.label}", bg: "${btn.bg}" }`
        )
        .join(', ');
      const propsString = `<UIKitFloat mainIcon="${selectedFloatProps.mainIcon}" mainColor="${
        selectedFloatProps.mainColor
      }" mainHover="${selectedFloatProps.mainHover}" position="${
        selectedFloatProps.position
      }" childrenButtons={[${formatChildrenButtons}]} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedFloatProps(null);
  };

  return (
    <div style={{ height: '100vh', padding: '50px' }}>
      <h2>FAB Menu Example</h2>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000
        }}
        onClick={handleFloatClick}
      >
        <UIKitFloat
          mainIcon={<FaArrowUp />}
          mainColor="#4caf50"
          mainHover="#388e3c"
          position="bottom-right"
          childrenButtons={[
            {
              icon: <FaPlus />,
              label: 'Add',
              onClick: () => alert('Add Clicked'),
              bg: '#e91e63'
            },
            {
              icon: <FaHome />,
              label: 'Home',
              onClick: () => alert('Go Home'),
              bg: '#3f51b5'
            },
            {
              icon: <FaCog />,
              label: 'Settings',
              onClick: () => alert('Open Settings'),
              bg: '#ff9800'
            }
          ]}
        />
      </div>

      {selectedFloatProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">FAB Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitFloat mainIcon="${selectedFloatProps.mainIcon}" mainColor="${
                selectedFloatProps.mainColor
              }" mainHover="${selectedFloatProps.mainHover}" position="${
                selectedFloatProps.position
              }" childrenButtons={[\n  ${selectedFloatProps.childrenButtons
                .map(
                  (btn) =>
                    `{ icon: ${btn.icon}, label: "${btn.label}", bg: "${btn.bg}" }`
                )
                .join(',\n  ')}\n]} />`}
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

export default FloatView;