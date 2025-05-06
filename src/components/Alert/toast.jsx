
import React, { useEffect, useState } from 'react';

const toastStyles = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-400 text-black',
  info: 'bg-blue-500 text-white',
};

export const Toast = ({ type, message, onClose, position = 'bottom-right' }) => {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // after fade-out
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  };

  return (
    <div
      className={`fixed z-50 ${positionClasses[position]} 
        w-[90%] sm:w-auto px-4 py-3 rounded-md shadow-lg 
        transition-all duration-300 ease-in-out
        transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${toastStyles[type]}`}
    >
      <span>{message}</span>
    </div>
  );
};
