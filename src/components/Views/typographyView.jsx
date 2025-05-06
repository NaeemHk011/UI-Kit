import React from 'react';
import UIKitTypography from '../Typography/typography';

const TypographyView = () => {
  return (
    <div className="space-y-4 p-6">
      {/* Typography Headings */}
      <h2 className="text-2xl font-bold text-gray-800">Typography</h2>

      {/* Default Typography */}
      <div>
        <UIKitTypography>Design (default)</UIKitTypography>
      </div>

      {/* Styled Typography */}
      <div className="space-y-2">
        <UIKitTypography type="secondary">Design (secondary)</UIKitTypography>
        <UIKitTypography type="success">Design (success)</UIKitTypography>
        <UIKitTypography type="warning">Design (warning)</UIKitTypography>
        <UIKitTypography type="danger">Design (danger)</UIKitTypography>
        <UIKitTypography type="disabled">Design (disabled)</UIKitTypography>
        <UIKitTypography type="mark">Design (mark)</UIKitTypography>
        <UIKitTypography type="code">Design (code)</UIKitTypography>
        <UIKitTypography type="keyboard">Design (keyboard)</UIKitTypography>
        <UIKitTypography type="underline">Design (underline)</UIKitTypography>
        <UIKitTypography type="delete">Design (delete)</UIKitTypography>
        <UIKitTypography type="strong">Design (strong)</UIKitTypography>
        <UIKitTypography type="italic">Design (italic)</UIKitTypography>
        <UIKitTypography type="link">Design (Link)</UIKitTypography>
      </div>

      {/* Typography with Different Tags */}
      <div className="space-y-2">
        <UIKitTypography as="h1" type="success">This is an H1 Heading (Success)</UIKitTypography>
        <UIKitTypography as="h2" type="warning">This is H2 (Warning)</UIKitTypography>
        <UIKitTypography as="p" type="code">This is code inside paragraph</UIKitTypography>
        <UIKitTypography as="span" type="danger">Danger inside span</UIKitTypography>
      </div>
    </div>
  );
};

export default TypographyView;
