import React from 'react';

const UIKitCard = ({
  icon,
  iconBgColor = 'bg-blue-100',
  title,
  subtitle,
  rightValue,
  rightLabel,
  imageSrc,
  badgeText,
  createdDate,
  className = '',
  imagePosition = 'top', // 'top', 'left', 'right', 'bottom'
}) => {
  const isHorizontal = imagePosition === 'left' || imagePosition === 'right';

  return (
    <div className={`relative rounded-xl shadow-md bg-white overflow-hidden ${className} flex ${isHorizontal ? 'flex-row' : 'flex-col'}`}>
      
      {/* Badge */}
      {badgeText && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-md z-10">
          {badgeText}
        </span>
      )}

      {/* Image (wrapped in a styled div) */}
      {imageSrc && imagePosition === 'top' && (
        <div className="w-full h-32 overflow-hidden rounded-t-xl">
          <img src={imageSrc} alt="Top visual" className="w-full h-full object-cover" />
        </div>
      )}

      {imageSrc && imagePosition === 'left' && (
        <div className="w-28 h-full overflow-hidden rounded-l-xl">
          <img src={imageSrc} alt="Left visual" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBgColor}`}>
                {icon}
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-500 text-sm">{subtitle}</p>
            </div>
          </div>
          {(rightValue || rightLabel) && (
            <div className="text-right">
              <h3 className="text-md font-bold">{rightValue}</h3>
              <p className="text-gray-400 text-sm">{rightLabel}</p>
            </div>
          )}
        </div>

        {createdDate && (
          <p className="text-xs text-gray-500 mt-3">Created: {createdDate}</p>
        )}
      </div>

      {imageSrc && imagePosition === 'right' && (
        <div className="w-28 h-full overflow-hidden rounded-r-xl">
          <img src={imageSrc} alt="Right visual" className="w-full h-full object-cover" />
        </div>
      )}

      {imageSrc && imagePosition === 'bottom' && (
        <div className="w-full h-32 overflow-hidden rounded-b-xl">
          <img src={imageSrc} alt="Bottom visual" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default UIKitCard;
