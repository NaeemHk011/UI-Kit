import React from 'react';

const UIKitCard = ({
  icon,
  iconBgColor = 'bg-blue-100',
  title,
  subtitle,
  rightValue,
  rightLabel,
  className = '',
}) => {
  return (
    <div
      className={`w-full max-w-md flex justify-between items-center p-4 rounded-xl shadow-md bg-white ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBgColor}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <h3 className="text-md font-bold">{rightValue}</h3>
        <p className="text-gray-400 text-sm">{rightLabel}</p>
      </div>
    </div>
  );
};

export default UIKitCard;







//   <UIKitCard
//   icon={UIKitIcons.coins}
//   iconBgColor="bg-yellow-100"
//   title="Earnings"
//   subtitle="Monthly Revenue"
//   rightValue="$5,400"
//   rightLabel="$500"
// />
