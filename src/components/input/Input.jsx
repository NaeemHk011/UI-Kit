import React, { useState } from 'react';

const UIKitInput = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  label, 
  name, 
  error, 
  isPasswordToggle = false,
  labelColor = '#4B5EAA',  // Label color can be passed as prop
  borderColor = 'border-gray-300',  // Border color can be passed as prop
  padding = 'p-2',  // Padding can be passed as prop
  height = 'h-10',  // Height can be passed as prop
  showPasswordText = { show: 'Show', hide: 'Hide' },  // Allow dynamic text for password toggle
  className = '' 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <label htmlFor={name} className={`text-sm font-medium`} style={{ color: labelColor }}>{label}</label>}
      <div className="relative">
        <input
          type={isPasswordToggle && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className={`border-2 ${borderColor} rounded-lg ${padding} focus:outline-none focus:ring-2 focus:ring-blue-500 ${className || 'w-full'} ${height}`}
        />
        {isPasswordToggle && (
          <button
            type="button"
            onClick={handlePasswordToggle}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
          >
            {showPassword ? showPasswordText.hide : showPasswordText.show}
          </button>
        )}
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default UIKitInput;
