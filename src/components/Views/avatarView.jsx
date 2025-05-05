import React from 'react';
import Avatar from '../Avatar/avatar';  

const AvatarView = ({ avatars, maxVisible, variant, size, heading }) => {
  const visible = avatars.slice(0, maxVisible);
  const surplusCount = avatars.length - maxVisible;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-700">{heading}</h2>

      <div className="flex items-center -space-x-2">
        {visible.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            icon={avatar.icon}
            variant={variant}
            size={size}
          />
        ))}

        {surplusCount > 0 && (
          <div
            className={`bg-gray-500 text-white font-medium flex items-center justify-center border-2 border-white ${
              size === 'sm'
                ? 'w-6 h-6 text-xs'
                : size === 'lg'
                ? 'w-14 h-14 text-sm'
                : 'w-10 h-10 text-sm'
            } ${variant === 'square' ? 'rounded-none' : variant === 'rounded' ? 'rounded-md' : 'rounded-full'}`}
          >
            +{surplusCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarView;
