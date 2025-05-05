import React from 'react';

const UIKitRadio = ({
  name,
  options,
  selectedValue,
  onChange,
  direction = 'vertical', // or 'horizontal'
  gap = '1rem',
  labelColor = '#4B5EAA',
  size = '16px',
}) => {
  const flexDirection = direction === 'horizontal' ? 'row' : 'column';

  return (
    <div style={{ display: 'flex', flexDirection, gap }}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            color: labelColor,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            gap: '0.5rem',
            fontSize: size,
          }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            style={{
              accentColor: '#4B5EAA',
              width: size,
              height: size,
              cursor: 'pointer',
            }}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default UIKitRadio;
