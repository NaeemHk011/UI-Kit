import React from 'react';

const UIKitTextfield = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  type = 'text',
  className = '',
  disabled = false,
  error = '',
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={className}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default UIKitTextfield;
