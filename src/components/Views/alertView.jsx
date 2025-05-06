// src/views/AlertView.jsx
import React, { useState } from 'react';
import { UIKitAlert } from '../Alert/alert';
import { Toast } from '../Alert/toast';

export const AlertView = () => {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Heading in center */}
      <h2 className="text-3xl font-semibold text-center">Alert </h2>

      {/* Dynamic Alerts */}
      <div className="space-y-4">
        <UIKitAlert 
          type="success" 
          message="Success! Everything went well." 
          heading="Success"
        />
        <UIKitAlert 
          type="error" 
          message="Error! Something went wrong." 
          heading="Error"
        />
        <UIKitAlert 
          type="warning" 
          message="Warning! Please be careful." 
          heading="Warning"
        />
        <UIKitAlert 
          type="info" 
          message="Info! Here’s a helpful message." 
          heading="Information"
        />

      </div>

 
      <button
  onClick={triggerToast}
  className="bg-[#4B5EAA] text-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition-all duration-300"
>
  Show Toast
</button>


      {/* Show Toast when trigger is clicked */}
      {showToast && (
        <Toast
          type="success"
          message="Saved successfully!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};
