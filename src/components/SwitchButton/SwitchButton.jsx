import React from 'react';

const UIKitSwitch = ({
  label = 'Toggle',
  checked = false,
  onChange,
  onLabel = 'On',
  offLabel = 'Off',
  disabled = false,
  labelColor = '#4B5EAA', // Label color can be passed as prop
  switchColor = '#4B5EAA', // Color for switch when checked
  switchBgColor = 'bg-gray-300', // Background color for switch when not checked
}) => {
  const colorClass = checked
    ? `bg-[${switchColor}]`  // Dynamic color when checked
    : `${switchBgColor}`;    // Dynamic background color when unchecked

  return (
    <div className="flex items-center gap-4">
      <label className={`text-sm font-medium`} style={{ color: labelColor }}>
        {label}
      </label>

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

      <span className="text-sm" style={{ color: labelColor }}>
        {checked ? onLabel : offLabel}
      </span>
    </div>
  );
};

export default UIKitSwitch;
