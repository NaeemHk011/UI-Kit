
import React from 'react';

const typeClassMap = {
  default: 'text-black',
  secondary: 'text-gray-500',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-500',
  disabled: 'text-gray-400 cursor-not-allowed',
  mark: 'bg-yellow-200 text-black px-1',
  code: 'bg-gray-100 text-black font-mono px-1 rounded',
  keyboard: 'bg-gray-100 text-black px-2 py-0.5 rounded border text-sm',
  underline: 'underline',
  delete: 'line-through',
  strong: 'font-bold',
  italic: 'italic',
  link: 'text-blue-500 underline cursor-pointer hover:text-blue-700',
};

const sizeClassMap = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-base',
  span: 'text-base',
};

const UIKitTypography = ({
  children,
  type = 'default',
  as = 'p',
  fontFamily = 'Montserrat, sans-serif',  // Default font family passed as prop
}) => {
  const Element = as;
  const typeClasses = typeClassMap[type] || typeClassMap.default;
  const sizeClasses = sizeClassMap[as] || '';

  return (
    <Element
      className={`${typeClasses} ${sizeClasses}`}
      style={{ fontFamily }}  // Apply the font family here
    >
      {children}
    </Element>
  );
};

export default UIKitTypography;
