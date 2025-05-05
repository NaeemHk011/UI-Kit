// src/components/ButtonView.jsx

import React from 'react';
import UIKitBtn from '../Button/button';

const ButtonView = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-10">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Buttons</h1>

      <div className="flex flex-wrap gap-4 justify-center">

        <UIKitBtn
          label="Primary"
          type="primary"
          shine="medium"
          size="md"
        />

        <UIKitBtn
          label="Success"
          type="success"
          shine="high"
          size="lg"
          borderRadius="rounded-xl"
        />

        <UIKitBtn
          label="Danger"
          type="danger"
          shine="low"
          size="sm"
        />

        <UIKitBtn
          label="Secondary"
          type="secondary"
          size="md"
        />

        <UIKitBtn
          label="Purple Love"
          type="customPurple"
          size="md"
          fontSize="text-lg"
        />
             <UIKitBtn
        label="Submit"
        type="primary"
        width="w-48"
        height="h-10"
        padding="px-3 py-1"
        fontSize="text-sm"
      />
      
       <UIKitBtn
        label="Large Custom"
        type="success"
        padding="px-10 py-4"
        margin="m-4"
        width="w-60"
        height="h-10"
        fontSize="text-md"
        borderRadius="rounded-xl"
      />

      </div>
    </div>
  );
};

export default ButtonView;
