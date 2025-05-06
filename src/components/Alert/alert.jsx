import React, { useState } from 'react';

const alertStyles = {
  success: 'border-green-500 text-green-700 bg-green-50',
  error: 'border-red-500 text-red-700 bg-red-50',
  warning: 'border-yellow-500 text-yellow-700 bg-yellow-50',
  info: 'border-blue-500 text-blue-700 bg-blue-50',
};

const alertIcons = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
};

const positionStyles = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};

export const UIKitAlert = ({
  type = 'info',
  message,
  heading,
  position, 
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`${position ? `fixed z-50 transform ${positionStyles[position]}` : ''}
                  border rounded-md flex flex-col gap-1 text-sm 
                  ${alertStyles[type]} 
                  max-w-full sm:max-w-md w-full 
                  min-h-[48px] px-4 py-3 
                  shadow-sm`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{alertIcons[type]}</span>
          {heading && <strong className="text-base">{heading}</strong>}
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-sm text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>
      <span className="ml-7">{message}</span>
    </div>
  );
};
