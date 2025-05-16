// src/components/UIKitProgress.jsx
import React from 'react';

const UIKitProgress = ({
  type = 'linear',
  progress = 0,
  color = '#4B5EAA',
  height = 8,
  size = 80,
}) => {
  if (type === 'circular') {
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative inline-block" style={{ width: size, height: size }}>
        <svg className="rotate-[-90deg]" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.6s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
          {progress >= 100 ? '✅' : `${progress}%`}
        </div>
      </div>
    );
  }

  // Linear Progress
  return (
    <div className="w-full bg-gray-200 rounded-full relative overflow-hidden" style={{ height }}>
      <div
        className="rounded-full flex items-center justify-center text-white text-xs font-medium transition-all duration-500 ease-in-out"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: '100%',
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default UIKitProgress;
