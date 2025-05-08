import React, { useState } from 'react';
import UIKitTypography from '../Typography/typography';

const TypographyView = () => {
  const [selectedTypographyProps, setSelectedTypographyProps] = useState(null);

  const typographies = [
    {
      fontFamily: 'Montserrat, sans-serif',
      children: 'Design (default)'
    },
    {
      fontFamily: 'Arial, sans-serif',
      type: 'secondary',
      children: 'Design (secondary)'
    },
    {
      fontFamily: 'Roboto, sans-serif',
      type: 'success',
      children: 'Design (success)'
    },
    {
      fontFamily: 'Verdana, sans-serif',
      type: 'warning',
      children: 'Design (warning)'
    },
    {
      fontFamily: 'Tahoma, sans-serif',
      type: 'danger',
      children: 'Design (danger)'
    },
    {
      fontFamily: 'Georgia, serif',
      type: 'disabled',
      children: 'Design (disabled)'
    },
    {
      fontFamily: 'Courier New, monospace',
      type: 'mark',
      children: 'Design (mark)'
    },
    {
      fontFamily: 'Comic Sans MS, cursive',
      type: 'code',
      children: 'Design (code)'
    },
    {
      fontFamily: 'Arial, sans-serif',
      type: 'keyboard',
      children: 'Design (keyboard)'
    },
    {
      fontFamily: 'Georgia, serif',
      type: 'underline',
      children: 'Design (underline)'
    },
    {
      fontFamily: 'Times New Roman, serif',
      type: 'delete',
      children: 'Design (delete)'
    },
    {
      fontFamily: 'Courier New, monospace',
      type: 'strong',
      children: 'Design (strong)'
    },
    {
      fontFamily: 'Arial, sans-serif',
      type: 'italic',
      children: 'Design (italic)'
    },
    {
      fontFamily: 'Verdana, sans-serif',
      type: 'link',
      children: 'Design (Link)'
    },
    {
      fontFamily: 'Montserrat, sans-serif',
      as: 'h1',
      type: 'success',
      children: 'This is an H1 Heading (Success)'
    },
    {
      fontFamily: 'Roboto, sans-serif',
      as: 'h2',
      type: 'warning',
      children: 'This is H2 (Warning)'
    },
    {
      fontFamily: 'Verdana, sans-serif',
      as: 'p',
      type: 'code',
      children: 'This is code inside paragraph'
    },
    {
      fontFamily: 'Georgia, serif',
      as: 'span',
      type: 'danger',
      children: 'Danger inside span'
    }
  ];

  const handleTypographyClick = (props) => {
    setSelectedTypographyProps(props);
  };

  const handleCopy = () => {
    if (selectedTypographyProps) {
      const propsString = `<UIKitTypography ${Object.entries(selectedTypographyProps)
        .filter(([key]) => key !== 'children')
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')}>${selectedTypographyProps.children}</UIKitTypography>`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedTypographyProps(null);
  };

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold text-gray-800">Typography</h2>
      <div>
        {typographies.slice(0, 1).map((typoProps, index) => (
          <div
            key={`default-${index}`}
            className="cursor-pointer"
            onClick={() => handleTypographyClick(typoProps)}
          >
            <UIKitTypography {...typoProps} />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {typographies.slice(1, 14).map((typoProps, index) => (
          <div
            key={`variant-${index}`}
            className="cursor-pointer"
            onClick={() => handleTypographyClick(typoProps)}
          >
            <UIKitTypography {...typoProps} />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {typographies.slice(14).map((typoProps, index) => (
          <div
            key={`element-${index}`}
            className="cursor-pointer"
            onClick={() => handleTypographyClick(typoProps)}
          >
            <UIKitTypography {...typoProps} />
          </div>
        ))}
      </div>

      {selectedTypographyProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Typography Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitTypography ${Object.entries(selectedTypographyProps)
                .filter(([key]) => key !== 'children')
                .map(([key, value]) => `${key}="${value}"`)
                .join(' ')}>${selectedTypographyProps.children}</UIKitTypography>`}
            </pre>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCopy}
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

export default TypographyView;