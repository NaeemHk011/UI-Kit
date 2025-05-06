import React, { useState } from 'react';

const UIKitTooltip = ({ message, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipContainerStyles = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const tooltipMessageStyles = {
    position: 'absolute',
    bottom: '125%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out, transform 0.3s',
    zIndex: 999,
    pointerEvents: 'none',
  };

  const tooltipArrowStyles = {
    position: 'absolute',
    bottom: '115%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid #333',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 998,
  };

  return (
    <div
      style={tooltipContainerStyles}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div style={tooltipMessageStyles}>{message}</div>
      <div style={tooltipArrowStyles}></div>
    </div>
  );
};

export default UIKitTooltip;
