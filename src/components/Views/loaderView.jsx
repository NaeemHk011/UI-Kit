import { useState, useEffect } from 'react';
import UIKitLoader from '../Loader/loader';

const LoaderView = ({
  loaderTypes = ['grid', 'orbit', 'ripple', 'pulseBar', 'bounce', 'spinnerDots', 'fade', 'waveDots'],
  colors = ['blue', 'red', 'green', 'purple', 'gray', 'blue', 'red', 'green'],
  size = 'lg',
  gridCols = 4,
  showIndividualLoader = false,
  individualType = 'pulseBar',
  individualColor = 'blue',
  individualLoadingText = 'Custom Loader',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedLoaderProps, setSelectedLoaderProps] = useState(null);

  useEffect(() => {
    setIsVisible(true); // Ensure visibility for demo
  }, []);

  // Ensure colors array matches the length of loaderTypes by cycling through colors
  const adjustedColors = loaderTypes.map((_, index) => colors[index % colors.length]);

  const handleShowLoaderProps = (loaderProps) => {
    setSelectedLoaderProps(loaderProps);
  };

  const handleCopyProps = () => {
    if (selectedLoaderProps) {
      const propsString = `<UIKitLoader ${Object.entries(selectedLoaderProps)
        .map(([key, value]) => `${key}={${typeof value === 'string' ? `"${value}"` : value}}`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedLoaderProps(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Loader Variations</h1>
      <div
        className="grid gap-6 justify-items-center"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gap: '1.5rem',
        }}
      >
        {loaderTypes.map((type, index) => {
          const loaderProps = {
            type,
            size,
            color: adjustedColors[index],
            loadingText: `${type.charAt(0).toUpperCase() + type.slice(1)} Loader`,
            isLoading: isVisible,
          };

          return (
            <div
              key={type}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleShowLoaderProps(loaderProps)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <UIKitLoader {...loaderProps} />
            </div>
          );
        })}
      </div>
      {showIndividualLoader && (
        <div
          className="mt-8 flex flex-col items-center cursor-pointer"
          onClick={() =>
            handleShowLoaderProps({
              type: individualType,
              size,
              color: individualColor,
              loadingText: individualLoadingText,
              isLoading: isVisible,
            })
          }
        >
          <UIKitLoader
            type={individualType}
            size={size}
            color={individualColor}
            loadingText={individualLoadingText}
            isLoading={isVisible}
          />
        </div>
      )}
      {selectedLoaderProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Loader Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitLoader ${Object.entries(selectedLoaderProps)
                .map(([key, value]) => `${key}={${typeof value === 'string' ? `"${value}"` : value}}`)
                .join(' ')} />`}
            </pre>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCopyProps}
              >
                Copy Code
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoaderView;