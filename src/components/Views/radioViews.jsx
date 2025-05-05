import React, { useState } from 'react';
import UIKitRadio from '../RadioButton/radio';

const RadioViews = () => {
  const [selected, setSelected] = useState('option1');

  const options = [
    { label: 'First Option', value: 'option1' },
    { label: 'Second Option', value: 'option2' },
    { label: 'Third Option', value: 'option3' },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#f9fafb',
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#4B5EAA',
      }}>
        Choose an Option
      </h1>

      <UIKitRadio
        name="myRadio"
        options={options}
        selectedValue={selected}
        onChange={setSelected}
        direction="vertical" // or "horizontal"
        gap="1.2rem"
        labelColor="#4B5EAA"
        size="18px"


      />



    </div>
  );
};

export default RadioViews;
