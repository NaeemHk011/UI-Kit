
import React from 'react';


const UIKitBtn = ({
  label = 'Button',
  type = 'primary',
  size = 'sm',
  shine = 'medium',
  onClick = () => { },
  style = {},
  borderRadius = 'rounded-lg',
  fontSize = 'text-base',
  padding = 'px-4 py-2',
  disabled = false,
  icon,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const typeClasses = {
    primary:
      'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:from-blue-600 hover:to-blue-800',
    secondary:
      'bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg hover:from-gray-700 hover:to-gray-900',
    outline:
      'border-2 border-blue-500 text-blue-500 bg-transparent shadow-lg hover:bg-blue-500 hover:text-white',
    success:
      'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg hover:from-green-600 hover:to-green-800',
    danger:
      'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg hover:from-red-600 hover:to-red-800',

    customBlue: 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg',
    customGreen:'bg-green-500 text-white hover:bg-green-600 shadow-lg',
    customRed:  'bg-red-500 text-white hover:bg-red-600 shadow-lg',
    customPurple:'bg-purple-500 text-white hover:bg-purple-600 shadow-lg',
  };

  const shineStyles = {
    low: 'shine-low',
    medium: 'shine-medium',
    high: 'shine-high',
  };

  const baseStyles =
    'relative overflow-hidden font-semibold transition-all duration-300 flex items-center justify-center gap-2';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      style={{ ...style }}
      onClick={onClick}
      className={`inline-block ${baseStyles} ${sizeClasses[size]} ${typeClasses[type]} ${shineStyles[shine]} ${borderRadius} ${fontSize} ${padding} ${disabledStyles} ${className}`}
      disabled={disabled}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="relative z-10">{label}</span>
      {!disabled && <span className="shiny-effect" />}
    </button>
  );
};

export default UIKitBtn;






// src/App.jsx

// import React from 'react';

// import UIKitBtn from './components/Button/button';

// const App = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//   <UIKitBtn label='CLICK ME'  type='success' style={{padding:'20px'}} className='primary'/>
//     </div>
//   );
// };

// export default App;