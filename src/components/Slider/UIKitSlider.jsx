import React, { useState, useEffect } from 'react';

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
  scalePoints = [25, 50, 75], // Excluding min and max, as they are shown separately
  scaleLabelFontSize = '12px',
  scaleLabelColor = 'gray-600',
  scaleSpacing = '10px',
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const percentage = ((displayValue - min) / (max - min)) * 100;

  // Sync displayValue with value prop
  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  // Handle click on scale point
  const handleScalePointClick = (point) => {
    setDisplayValue(point);
    onChange?.(point);
  };

  // Include min and max in the points for rendering
  const allPoints = [min, ...scalePoints, max];

  return (
    <div className={`w-full ${className}`}>
      {/* Slider */}
      <div className="relative rounded-full bg-gradient-to-r from-gray-200 to-gray-300" style={{ height }}>
        {/* Filled Track */}
        <div
          className="absolute rounded-full transition-all duration-300 ease-in-out bg-gradient-to-r from-green-400 to-green-600"
          style={{
            width: `${percentage}%`,
            height,
          }}
        />

        {/* Input Range */}
        <input
          type="range"
          value={displayValue}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            setDisplayValue(newValue);
            onChange?.(newValue);
          }}
          min={min}
          max={max}
          step={step}
          className="w-full bg-transparent appearance-none absolute top-0 left-0"
          style={{ height }}
        />

        {/* Tooltip */}
        {showValue && (
          <div
            className="absolute top-[-40px] bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded shadow-md"
            style={{
              left: `${percentage}%`,
              transform: 'translateX(-50%)',
            }}
          >
            {displayValue}
            {unit}
          </div>
        )}
      </div>

      {/* Scale Points with Tick Marks */}
      <div className="relative flex justify-between items-center" style={{ marginTop: scaleSpacing }}>
        <div className="flex justify-between w-full relative">
          {allPoints.map((point) => {
            const pointPercentage = ((point - min) / (max - min)) * 100;
            const constrainedPercentage = Math.min(100, Math.max(0, pointPercentage));
            return (
              <div
                key={point}
                className="flex flex-col items-center relative"
                style={{ left: `${constrainedPercentage}%`, transform: 'translateX(-50%)' }}
              >
                {/* Tick Mark */}
                <button
                  onClick={() => handleScalePointClick(point)}
                  className="w-0.5 h-3 bg-gray-400 hover:bg-gray-600 transition-colors duration-200"
                />
                {/* Point Label */}
                <span
                  className={`mt-1 font-medium text-${scaleLabelColor}`}
                  style={{ fontSize: scaleLabelFontSize }}
                >
                  {point}
                  {unit}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Thumb Styling */}
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: ${thumbSize};
          height: ${thumbSize};
          border-radius: 50%;
          border: 2px solid #34D399; /* Green border */
          background-color: white;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          margin-top: calc((${height} - ${thumbSize}) / 2);
          transition: all 0.3s ease-in-out;
        }

        input[type=range]::-moz-range-thumb {
          width: ${thumbSize};
          height: ${thumbSize};
          border-radius: 50%;
          border: 2px solid #34D399; /* Green border */
          background-color: white;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default UIKitSlider;