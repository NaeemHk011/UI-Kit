const UIKitLoader = ({ type, size, color, loadingText, isLoading }) => {
  const sizeStyles = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const dotSizeStyles = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
  };

  const textSizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const colorStyles = {
    blue: 'bg-blue-500 text-blue-500',
    red: 'bg-red-500 text-red-500',
    green: 'bg-green-500 text-green-500',
    gray: 'bg-gray-500 text-gray-500',
    purple: 'bg-purple-500 text-purple-500',
  };

  const baseStyles = `flex flex-col items-center justify-center ${isLoading ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`;

  const renderLoader = () => {
    switch (type) {
      case 'grid':
        return (
          <div className={`grid grid-cols-2 gap-1 ${sizeStyles[size]} animate-[rotate_2s_linear_infinite]`}>
            <div className={`rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} opacity-100`} />
            <div className={`rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} opacity-75`} />
            <div className={`rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} opacity-50`} />
            <div className={`rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} opacity-25`} />
          </div>
        );
      case 'orbit':
        return (
          <div className={`relative ${sizeStyles[size]}`}>
            <div className={`absolute rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} animate-[orbit_1.5s_linear_infinite]`} />
          </div>
        );
      case 'ripple':
        return (
          <div className={`relative ${sizeStyles[size]}`}>
            <div className={`absolute rounded-full ${colorStyles[color]} opacity-50 animate-[ripple_1.5s_ease-out_infinite]`} style={{ width: '100%', height: '100%', animationDelay: '0s' }} />
            <div className={`absolute rounded-full ${colorStyles[color]} opacity-30 animate-[ripple_1.5s_ease-out_infinite]`} style={{ width: '80%', height: '80%', animationDelay: '0.3s' }} />
            <div className={`absolute rounded-full ${colorStyles[color]} opacity-10 animate-[ripple_1.5s_ease-out_infinite]`} style={{ width: '60%', height: '60%', animationDelay: '0.6s' }} />
          </div>
        );
      case 'pulseBar':
        return (
          <div className={`flex items-center ${sizeStyles[size]}`}>
            <div className={`h-2 flex-1 ${colorStyles[color]} animate-[pulseBar_1.5s_ease-in-out_infinite]`} />
          </div>
        );
      case 'bounce':
        return (
          <div className={`flex space-x-2 ${sizeStyles[size]}`}>
            <div className={`rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} animate-[bounce_1s_ease-in-out_infinite]`} style={{ animationDelay: '0s' }} />
            <div className={`rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} animate-[bounce_1s_ease-in-out_infinite]`} style={{ animationDelay: '0.2s' }} />
            <div className={`rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} animate-[bounce_1s_ease-in-out_infinite]`} style={{ animationDelay: '0.4s' }} />
          </div>
        );
      case 'spinnerDots':
        return (
          <div className={`relative ${sizeStyles[size]}`}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full ${dotSizeStyles[size]} ${colorStyles[color]} opacity-50`}
                style={{
                  transform: `rotate(${i * 45}deg) translate(50%, 0)`,
                  animation: `spinnerDots_1.2s_linear_infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        );
      case 'fade':
        return (
          <div className={`relative ${sizeStyles[size]}`}>
            <div className={`absolute w-full h-full ${colorStyles[color]} animate-[fade_1.5s_ease-in-out_infinite]`} />
          </div>
        );
      case 'waveDots':
        return (
          <div className={`flex space-x-1 ${sizeStyles[size]}`}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`rounded-full ${dotSizeStyles[size]} ${colorStyles[color]}`}
                style={{
                  animation: `waveDots_1.2s_ease-in-out_infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        );
      default:
        return <div className="text-red-500">Invalid loader type</div>;
    }
  };

  return (
    <div className={baseStyles}>
      {renderLoader()}
      {loadingText && (
        <span className={`mt-2 ${textSizeStyles[size]} ${colorStyles[color]}`}>
          {loadingText}
        </span>
      )}
      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(50%, 0) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes pulseBar {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.3); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50%); }
        }
        @keyframes spinnerDots {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        @keyframes fade {
          0% { opacity: 1; transform: rotate(0deg); }
          50% { opacity: 0.3; transform: rotate(90deg); }
          100% { opacity: 1; transform: rotate(180deg); }
        }
        @keyframes waveDots {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

export default UIKitLoader;