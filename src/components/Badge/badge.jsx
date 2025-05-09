
import React from 'react';

const badgeColors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  processing: 'bg-blue-500',
  default: 'bg-gray-400',
  primary: 'bg-blue-600',
  secondary: 'bg-pink-500',
};

const UIKitBadge = ({ status = 'default', text = '', offset = [0, 0], children }) => {
  const colorClass = badgeColors[status] || badgeColors.default;

  const getOffsetStyle = () => {
    const [x, y] = offset.map(num => (typeof num === 'number' ? num : 0));
    return { transform: `translate(${x}px, ${y}px)` };
  };

  const badge = (
    <span
      className={`relative inline-block ${colorClass} text-white text-sm font-semibold px-3 py-1 rounded-l-full rounded-tr-full`}
      role="status"
      aria-label={text || status}
    >
      {text}
      <span
        className="absolute right-0 bottom-0 w-0 h-0"
        style={{
          borderTop: '10px solid transparent',
          borderLeft: `10px solid ${colorClass.includes('bg-gray-400') ? 'white' : 'rgba(0, 0, 0, 0.3)'}`,
          borderBottom: '10px solid transparent',
          right: '-10px',
        }}
      />
    </span>
  );

  if (!children) return <span className="inline-block">{badge}</span>;

  return (
    <span className="relative inline-block">
      {children}
      <span className="absolute top-0 right-0" style={getOffsetStyle()}>
        {badge}
      </span>
    </span>
  );
};

export default UIKitBadge;


