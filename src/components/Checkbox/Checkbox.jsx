import React, { useState } from 'react';

const UIKitCheckbox = ({
  label,
  disabled = false,
  color = 'blue', // blue, green, red
  size = 'md', // sm, md, lg
  variant = 'default', // default, rounded, square, filled, outline, custom
  customClass = '',
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const borderColors = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    red: 'border-red-500',
  };

  const ringColors = {
    blue: 'focus:ring-blue-200',
    green: 'focus:ring-green-200',
    red: 'focus:ring-red-200',
  };

  const bgCheckedColors = {
    blue: 'checked:bg-blue-500',
    green: 'checked:bg-green-500',
    red: 'checked:bg-red-500',
  };

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const labelSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const variantClasses = {
    default: `border-2 rounded`,
    rounded: `border-2 rounded-full`,
    square: `border-2`,
    filled: `border-0`,
    outline: `border-2 bg-transparent`,
    custom: `appearance-none`,
  };

  const colorClass = `${borderColors[color]} ${ringColors[color]} ${bgCheckedColors[color]}`;

  const labelClass = `
    ${labelSize[size]} 
    ${disabled ? 'text-gray-400' : 'text-gray-800'} 
    cursor-pointer select-none
  `;

  const checkboxClass = `
    ${variant === 'custom' ? 'appearance-none' : ''} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${colorClass} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
    transition-all duration-200
  `.trim();

  return (
    <div className={`flex items-center space-x-2 ${customClass}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={checkboxClass}
      />
      {label && <label className={labelClass}>{label}</label>}
    </div>
  );
};

export default UIKitCheckbox;
