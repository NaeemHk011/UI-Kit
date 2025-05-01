// import React from 'react';

// const cardTypes = {
//   default: 'bg-white text-black',
//   primary: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white',
//   secondary: 'bg-gradient-to-r from-gray-600 to-gray-800 text-white',
//   success: 'bg-gradient-to-r from-green-400 to-green-600 text-white',
//   danger: 'bg-gradient-to-r from-red-500 to-red-700 text-white',
//   warning: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black',
//   outline: 'border border-blue-500 bg-white text-blue-500',
// };

// const UIKitCard = ({
//   title = '',
//   content = '',
//   type = 'default',
//   children,
//   className = '',
//   style = {},
// }) => {
//   return (
//     <div
//       style={style}
//       className={`relative ${cardTypes[type]} ${className}`}
//     >
//       {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
//       {content && <p className="text-base">{content}</p>}
//       {children}
//     </div>
//   );
// };

// export default UIKitCard;



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
    <div className={`flex justify-between items-center p-4 rounded-xl shadow-md bg-white ${className}`}>
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
