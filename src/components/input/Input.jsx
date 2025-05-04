import React, { useState } from 'react';

const UIKitInput = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  label, 
  name, 
  error, 
  isPasswordToggle,
  className 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type={isPasswordToggle && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className={`border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className || 'w-full h-10'}`}
        />
        {isPasswordToggle && (
          <button
            type="button"
            onClick={handlePasswordToggle}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default UIKitInput;
