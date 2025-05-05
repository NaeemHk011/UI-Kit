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
  labelColor = '#4B5EAA',  
  errorColor = 'text-red-500',
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className={`text-sm font-medium`} style={{ color: labelColor }}>{label}</label>}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={className}
      />

      {error && <p className={`text-sm mt-1 ${errorColor}`}>{error}</p>}
    </div>
  );
};

export default UIKitTextfield;
