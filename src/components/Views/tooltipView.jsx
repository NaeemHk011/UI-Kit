import React, { useState } from 'react';
import UIKitTooltip from '../Tooltip/toolTip';

const TooltipView = () => {
  const [selectedTooltipProps, setSelectedTooltipProps] = useState(null);

  const tooltips = [
    {
      message: 'Simple helpful tip!',
      children: '<button className="px-6 py-3 bg-[#4B5EAA] text-white rounded-xl shadow-md hover:scale-105 transition duration-300">Hover Me</button>'
    },
    {
      message: 'Edit this item',
      children: '<button className="p-3 bg-[#4B5EAA] text-white rounded-full shadow hover:bg-[#365fa9] transition">✏️</button>'
    },
    {
      message: "You can't click this!",
      children: '<button disabled className="px-6 py-3 bg-gray-400 text-white rounded-lg opacity-70 cursor-not-allowed">Disabled</button>'
    }
  ];

  const handleTooltipClick = (props) => {
    setSelectedTooltipProps(props);
  };

  const handleCopy = () => {
    if (selectedTooltipProps) {
      const propsString = `<UIKitTooltip message="${selectedTooltipProps.message}">
  ${selectedTooltipProps.children}
</UIKitTooltip>`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedTooltipProps(null);
  };

  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-[#4B5EAA] tracking-wide">
        Tooltip Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Default Tooltip</h3>
          <div
            className="cursor-pointer"
            onClick={() => handleTooltipClick(tooltips[0])}
          >
            <UIKitTooltip message="Simple helpful tip!">
              <button className="px-6 py-3 bg-[#4B5EAA] text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
                Hover Me
              </button>
            </UIKitTooltip>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Tooltip on Icon</h3>
          <div
            className="cursor-pointer"
            onClick={() => handleTooltipClick(tooltips[1])}
          >
            <UIKitTooltip message="Edit this item">
              <button className="p-3 bg-[#4B5EAA] text-white rounded-full shadow hover:bg-[#365fa9] transition">
                ✏️
              </button>
            </UIKitTooltip>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Tooltip on Disabled Button</h3>
          <div
            className="cursor-pointer"
            onClick={() => handleTooltipClick(tooltips[2])}
          >
            <UIKitTooltip message="You can't click this!">
              <button
                disabled
                className="px-6 py-3 bg-gray-400 text-white rounded-lg opacity-70 cursor-not-allowed"
              >
                Disabled
              </button>
            </UIKitTooltip>
          </div>
        </div>
      </div>

      {selectedTooltipProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Tooltip Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitTooltip message="${selectedTooltipProps.message}">
  ${selectedTooltipProps.children}
</UIKitTooltip>`}
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

export default TooltipView;