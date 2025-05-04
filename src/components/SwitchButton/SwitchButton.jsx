import React from 'react';

const UIKitSwitch = ({
  label = 'Toggle',
  checked = false,
  onChange,
  onLabel = 'On',
  offLabel = 'Off',
  disabled = false,
  color = 'green', // default color
}) => {
  const colorClass = checked
    ? color === 'blue'
      ? 'bg-blue-500'
      : 'bg-green-500'
    : 'bg-gray-300';

  return (
    <div className="flex items-center gap-4">
      <label className="text-gray-700">{label}</label>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <div
          className={`w-11 h-6 rounded-full transition-all ${colorClass}`}
        ></div>
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
            checked ? 'translate-x-5' : ''
          }`}
        ></div>
      </label>

      <span className="text-sm text-gray-600">
        {checked ? onLabel : offLabel}
      </span>
    </div>
  );
};

export default UIKitSwitch;
