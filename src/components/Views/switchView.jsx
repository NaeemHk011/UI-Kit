import React, { useState } from 'react';
import UIKitSwitch from '../SwitchButton/SwitchButton';

const SwitchView = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);


  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Switch Buttons</h2>

      <UIKitSwitch
        label="Dark Mode"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        onLabel="Dark"
        offLabel="Light"
      />

      <UIKitSwitch
        label="Account Status"
        checked={isActive}
        onChange={() => setIsActive(!isActive)}
        onLabel="Active"
        offLabel="Inactive"
      />

<UIKitSwitch
  label="Blue Toggle"
  checked={isDisabled}
  onChange={() => setIsActive(!isDisabled)}
  onLabel="Enabled"
  offLabel="Disabled"
  color="blue"
/>

    </div>
  );
};

export default SwitchView;
