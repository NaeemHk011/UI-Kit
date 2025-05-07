import React from 'react';
import UIKitTypography from '../Typography/typography';

const TypographyView = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold text-gray-800">Typography</h2>

    
      <div>
        <UIKitTypography fontFamily="Montserrat, sans-serif">
          Design (default)
        </UIKitTypography>
      </div>

      
      <div className="space-y-2">
        <UIKitTypography fontFamily="Arial, sans-serif" type="secondary">
          Design (secondary)
        </UIKitTypography>
        <UIKitTypography fontFamily="Roboto, sans-serif" type="success">
          Design (success)
        </UIKitTypography>
        <UIKitTypography fontFamily="Verdana, sans-serif" type="warning">
          Design (warning)
        </UIKitTypography>
        <UIKitTypography fontFamily="Tahoma, sans-serif" type="danger">
          Design (danger)
        </UIKitTypography>
        <UIKitTypography fontFamily="Georgia, serif" type="disabled">
          Design (disabled)
        </UIKitTypography>
        <UIKitTypography fontFamily="Courier New, monospace" type="mark">
          Design (mark)
        </UIKitTypography>
        <UIKitTypography fontFamily="Comic Sans MS, cursive" type="code">
          Design (code)
        </UIKitTypography>
        <UIKitTypography fontFamily="Arial, sans-serif" type="keyboard">
          Design (keyboard)
        </UIKitTypography>
        <UIKitTypography fontFamily="Georgia, serif" type="underline">
          Design (underline)
        </UIKitTypography>
        <UIKitTypography fontFamily="Times New Roman, serif" type="delete">
          Design (delete)
        </UIKitTypography>
        <UIKitTypography fontFamily="Courier New, monospace" type="strong">
          Design (strong)
        </UIKitTypography>
        <UIKitTypography fontFamily="Arial, sans-serif" type="italic">
          Design (italic)
        </UIKitTypography>
        <UIKitTypography fontFamily="Verdana, sans-serif" type="link">
          Design (Link)
        </UIKitTypography>
      </div>

      
      <div className="space-y-2">
        <UIKitTypography fontFamily="Montserrat, sans-serif" as="h1" type="success">
          This is an H1 Heading (Success)
        </UIKitTypography>
        <UIKitTypography fontFamily="Roboto, sans-serif" as="h2" type="warning">
          This is H2 (Warning)
        </UIKitTypography>
        <UIKitTypography fontFamily="Verdana, sans-serif" as="p" type="code">
          This is code inside paragraph
        </UIKitTypography>
        <UIKitTypography fontFamily="Georgia, serif" as="span" type="danger">
          Danger inside span
        </UIKitTypography>
      </div>
    </div>
  );
};

export default TypographyView;
