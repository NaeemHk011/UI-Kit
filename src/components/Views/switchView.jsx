import React, { useState } from 'react';
import UIKitSwitch from '../SwitchButton/SwitchButton';

const SwitchView = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedSwitchProps, setSelectedSwitchProps] = useState(null);

  const switches = [
    {
      label: 'Dark Mode',
      onLabel: 'Dark',
      offLabel: 'Light'
    },
    {
      label: 'Account Status',
      onLabel: 'Active',
      offLabel: 'Inactive'
    },
    {
      label: 'Blue Toggle',
      onLabel: 'Enabled',
      offLabel: 'Disabled',
      color: 'blue'
    }
  ];

  const handleSwitchClick = (props) => {
    setSelectedSwitchProps(props);
  };

  const handleCopy = () => {
    if (selectedSwitchProps) {
      const propsString = `<UIKitSwitch ${Object.entries(selectedSwitchProps)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedSwitchProps(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Switch Buttons</h2>
      {switches.map((switchProps, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => handleSwitchClick(switchProps)}
        >
          <UIKitSwitch
            {...switchProps}
            checked={
              index === 0 ? isDarkMode : index === 1 ? isActive : isDisabled
            }
            onChange={
              index === 0
                ? () => setIsDarkMode(!isDarkMode)
                : index === 1
                ? () => setIsActive(!isActive)
                : () => setIsDisabled(!isDisabled)
            }
          />
        </div>
      ))}

      {selectedSwitchProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Switch Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitSwitch ${Object.entries(selectedSwitchProps)
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

export default SwitchView;