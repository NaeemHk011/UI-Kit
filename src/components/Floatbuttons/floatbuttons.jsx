// UIKitFloat.jsx
import React, { useState } from 'react';

const UIKitFloat = ({
  mainIcon,
  mainColor = '#4caf50',
  mainHover = '#2e7d32',
  childrenButtons = [],
  position = 'bottom-right',
}) => {
  const [open, setOpen] = useState(false);

  const positions = {
    'bottom-right': { bottom: '20px', right: '20px' },
    'top-right': { top: '20px', right: '20px' },
  };

  const pos = positions[position] || positions['bottom-right'];

  const toggleMenu = () => setOpen(!open);

  return (
    <div style={{ position: 'fixed', zIndex: 999, ...pos }}>
      {/* Child Buttons */}
      {open &&
        childrenButtons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.onClick}
            style={{
              marginBottom: '10px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: btn.bg || '#007bff',
              color: '#fff',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
            title={btn.label}
          >
            {btn.icon}
          </button>
        ))}

      {/* Main Floating Button */}
      <button
        onClick={toggleMenu}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: mainColor,
          color: '#fff',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          transition: '0.3s',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = mainHover)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = mainColor)}
        title="Toggle Menu"
      >
        {mainIcon}
      </button>
    </div>
  );
};

export default UIKitFloat;
