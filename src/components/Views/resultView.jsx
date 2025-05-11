import { useState, useEffect } from 'react';
import UIKitResult from '../Result/result';

const ResultView = ({ type = 'success', message, customIcon }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const loadingTimer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(loadingTimer);
  }, [type, message]);

  const getResultConfig = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-50',
          textColor: 'text-green-800',
          borderColor: 'border-green-500',
          defaultMessage: message || 'Operation completed successfully!',
          animation: 'success-pulse'
        };
      case 'warning':
        return {
          bgColor: 'bg-yellow-50',
          textColor: 'text-yellow-800',
          borderColor: 'border-yellow-500',
          defaultMessage: message || 'Please check your input and try again.',
          animation: 'warning-shake'
        };
      case 'error':
        return {
          bgColor: 'bg-red-50',
          textColor: 'text-yellow-800',
          borderColor: 'border-red-500',
          defaultMessage: message || 'An error occurred. Please try again.',
          animation: 'error-bounce'
        };
      default:
        return {};
    }
  };

  return (
    <UIKitResult
      isLoading={isLoading}
      config={getResultConfig()}
      customIcon={customIcon}
      type={type}
    />
  );
};

export default ResultView;