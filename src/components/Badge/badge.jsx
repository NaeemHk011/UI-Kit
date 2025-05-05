import React from 'react';

const UIKitBadge = ({
  count = 0,
  icon,
  avatarSrc,
  avatarAlt = 'User',
  size = 'medium', // 'small' | 'medium' | 'large'
  showZero = false,
}) => {
  const sizeMap = {
    small: '32px',
    medium: '40px',
    large: '56px',
  };

  const avatarSize = sizeMap[size] || sizeMap.medium;
  const badgeContent = count > 99 ? '99+' : count;

  return (
    <div className="relative inline-block">
      {/* Avatar or Icon */}
      {avatarSrc ? (
        <img
          src={avatarSrc}
          alt={avatarAlt}
          className="rounded-full object-cover"
          style={{ width: avatarSize, height: avatarSize }}
        />
      ) : (
        <div
          className="bg-gray-300 text-white rounded-full flex items-center justify-center"
          style={{ width: avatarSize, height: avatarSize, fontSize: '1rem' }}
        >
          {icon}
        </div>
      )}

      {/* Badge */}
      {(count > 0 || showZero) && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full px-1.5 h-5 min-w-[20px] flex items-center justify-center shadow-md">
          {badgeContent}
        </span>
      )}
    </div>
  );
};

export default UIKitBadge;
