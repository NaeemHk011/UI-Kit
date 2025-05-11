const UIKitResult = ({ isLoading, config, customIcon, type }) => {
  const { bgColor, textColor, borderColor, defaultMessage, animation } = config;

  const icons = {
    success: customIcon || (
      <svg
        className={`w-8 h-8 text-green-500 transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    warning: customIcon || (
      <svg
        className={`w-8 h-8 text-yellow-500 ${animation}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    error: customIcon || (
      <svg
        className={`w-8 h-8 text-red-500 ${animation}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  };

  return (
    <>
      <style>
        {`
          @keyframes spin-smooth {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes shake {
            10%, 90% { transform: translateX(-2px); }
            20%, 80% { transform: translateX(2px); }
            30%, 50%, 70% { transform: translateX(-4px); }
            40%, 60% { transform: translateX(4px); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(-10%); }
            50% { transform: translateY(0); }
          }
          .spin-smooth {
            animation: spin-smooth 1s ease-in-out infinite;
          }
          .success-pulse {
            animation: pulse 1.5s ease-in-out infinite;
          }
          .warning-shake {
            animation: shake 0.5s ease-in-out;
          }
          .error-bounce {
            animation: bounce 0.6s ease-in-out;
          }
        `}
      </style>
      <div
        className={`
          w-full p-4 rounded-lg border
          ${bgColor} ${textColor} ${borderColor}
          flex items-center space-x-3
          transition-colors duration-300
        `}
      >
        <div className="flex-shrink-0 relative w-8 h-8">
          {isLoading && type === 'success' ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="spin-smooth w-8 h-8 text-green-500"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeOpacity="0.2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset="75"
                  transform="rotate(-90 18 18)"
                />
              </svg>
            </div>
          ) : (
            <div className={type === 'success' ? 'success-pulse' : animation}>
              {icons[type]}
            </div>
          )}
        </div>
        <div
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <h3 className="text-base font-medium capitalize">{type}</h3>
          <p className="text-sm mt-0.5">{defaultMessage}</p>
        </div>
      </div>
    </>
  );
};

export default UIKitResult;