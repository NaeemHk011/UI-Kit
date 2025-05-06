import React from 'react';

// Tailwind class mappings
const sizeClasses = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16"
};

const statusClasses = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500"
};

const UIKitAvatar = ({
  src,
  alt = "Avatar",
  size = "md",
  className = "",
  fallback,
  border = false,
  status
}) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative inline-block">
      <div
        className={`
          relative 
          rounded-full 
          overflow-hidden
          ${sizeClasses[size]}
          ${border ? 'border-2 border-white ring-2 ring-gray-200' : ''}
          ${className}
        `}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600"
            role="img"
            aria-label={alt}
          >
            {fallback || getInitials(alt)}
          </div>
        )}
      </div>

      {/* Status indicator */}
      {status && (
        <span
          className={`
            absolute 
            bottom-0 
            right-0
            rounded-full
            border-2 
            border-white
            ${size === 'xs' ? 'w-2 h-2' : 'w-3 h-3'}
            ${statusClasses[status]}
          `}
        />
      )}
    </div>
  );
};

export default UIKitAvatar;
