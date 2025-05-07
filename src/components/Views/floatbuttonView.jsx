// FloatView.jsx
import React from 'react';
import UIKitFloat from '../Floatbuttons/floatbuttons';
import { FaArrowUp, FaPlus, FaHome, FaCog } from 'react-icons/fa';

const FloatView = () => {
  return (
    <div style={{ height: '100vh', padding: '50px' }}>
      <h2>FAB Menu Example</h2>

      <UIKitFloat
        mainIcon={<FaArrowUp />}
        mainColor="#4caf50"
        mainHover="#388e3c"
        position="bottom-right"
        childrenButtons={[
          {
            icon: <FaPlus />,
            label: 'Add',
            onClick: () => alert('Add Clicked'),
            bg: '#e91e63',
          },
          {
            icon: <FaHome />,
            label: 'Home',
            onClick: () => alert('Go Home'),
            bg: '#3f51b5',
          },
          {
            icon: <FaCog />,
            label: 'Settings',
            onClick: () => alert('Open Settings'),
            bg: '#ff9800',
          },
        ]}
      />
    </div>
  );
};

export default FloatView;
