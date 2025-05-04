import React from 'react';

const UIKitSlider = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  showValue = true,
  unit = '%',
  color = 'green', 
  height = '8px',  
  thumbSize = '20px', 
  label = '', 
  className = '', 
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`w-full px-4 ${className}`}>
      {label && <label className="text-lg font-semibold text-gray-700 mb-2 block">{label}</label>}
      <div className="relative h-2 rounded-full bg-gray-300">
        <div
          className={`absolute h-2 rounded-full bg-${color}-600`}
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          value={value}
          onChange={(e) => onChange?.(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className="w-full h-2 bg-transparent appearance-none absolute top-0 left-0"
        />
      </div>

      {showValue && (
        <div className="text-center text-sm text-gray-700 mt-1">
          {value} {unit}
        </div>
      )}

      {/* Slider Thumb Style */}
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: ${thumbSize};
          height: ${thumbSize};
          border-radius: 50%;
          border: 2px solid white;
          background-color: ${getColorHex(color)};
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          margin-top: -6px;
        }

        input[type=range]::-moz-range-thumb {
          width: ${thumbSize};
          height: ${thumbSize};
          border-radius: 50%;
          border: 2px solid white;
          background-color: ${getColorHex(color)};
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

// Helper function to convert color to hex
const getColorHex = (color) => {
  const map = {
    green: '#10B981',
    blue: '#3B82F6',
    red: '#EF4444',
    purple: '#8B5CF6',
    gray: '#6B7280',
  };
  return map[color] || '#3B82F6';
};

export default UIKitSlider;
