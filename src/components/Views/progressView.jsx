import React, { useState } from 'react';
import { UIKitProgress } from '../Progress/progressBar';

export const ProgressView = () => {
  const [selectedProgressProps, setSelectedProgressProps] = useState(null);

  const linearProgressBars = [
    { type: 'linear', progress: 100, color: '#4B5EAA', height: 14 },
    { type: 'linear', progress: 85, color: 'green', height: 12 },
    { type: 'linear', progress: 60, color: 'orange', height: 10 },
    { type: 'linear', progress: 35, color: 'red', height: 8 }
  ];

  const circularProgressBars = [
    { type: 'circular', progress: 100, color: '#4B5EAA', size: 80, label: '100% Complete' },
    { type: 'circular', progress: 75, color: 'green', size: 70, label: '75%' },
    { type: 'circular', progress: 50, color: 'orange', size: 65, label: '50%' },
    { type: 'circular', progress: 30, color: 'red', size: 60, label: '30%' }
  ];

  const handleProgressClick = (props) => {
    setSelectedProgressProps(props);
  };

  const handleCopy = () => {
    if (selectedProgressProps) {
      const propsString = `<UIKitProgress ${Object.entries(selectedProgressProps)
        .filter(([key]) => key !== 'label')
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedProgressProps(null);
  };

  return (
    <div className="space-y-10 p-6">
      <h2 className="text-3xl font-bold text-center text-[#4B5EAA]">Progress Bars Showcase</h2>

      {/* LINEAR PROGRESS BARS */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#4B5EAA]">Linear Progress</h3>
        {linearProgressBars.map((props, index) => (
          <div
            key={`linear-${index}`}
            className="cursor-pointer"
            onClick={() => handleProgressClick(props)}
          >
            <UIKitProgress {...props} />
          </div>
        ))}
      </div>

      {/* CIRCULAR PROGRESS BARS */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#4B5EAA]">Circular Progress</h3>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {circularProgressBars.map((props, index) => (
            <div
              key={`circular-${index}`}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleProgressClick(props)}
            >
              <UIKitProgress {...props} />
              <span className="mt-2 font-medium text-sm">{props.label}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedProgressProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Progress Bar Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitProgress ${Object.entries(selectedProgressProps)
                .filter(([key]) => key !== 'label')
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