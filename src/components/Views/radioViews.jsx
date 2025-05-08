import React, { useState } from 'react';
import UIKitRadio from '../RadioButton/radio';

const RadioViews = () => {
  const [selected, setSelected] = useState('option1');
  const [selectedRadioProps, setSelectedRadioProps] = useState(null);

  const radioConfig = {
    name: 'myRadio',
    options: [
      { label: 'First Option', value: 'option1' },
      { label: 'Second Option', value: 'option2' },
      { label: 'Third Option', value: 'option3' }
    ],
    direction: 'vertical',
    gap: '1.2rem',
    labelColor: '#4B5EAA',
    size: '18px'
  };

  const handleRadioClick = () => {
    setSelectedRadioProps(radioConfig);
  };

  const handleCopy = () => {
    if (selectedRadioProps) {
      const formatOptions = selectedRadioProps.options
        .map((opt) => `{ label: "${opt.label}", value: "${opt.value}" }`)
        .join(', ');
      const propsString = `<UIKitRadio ${Object.entries(selectedRadioProps)
        .filter(([key]) => key !== 'options')
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} options={[${formatOptions}]} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedRadioProps(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f9fafb'
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#4B5EAA'
        }}
      >
        Choose an Option
      </h1>
      <div className="cursor-pointer" onClick={handleRadioClick}>
        <UIKitRadio
          name="myRadio"
          options={radioConfig.options}
          selectedValue={selected}
          onChange={setSelected}
          direction="vertical"
          gap="1.2rem"
          labelColor="#4B5EAA"
          size="18px"
        />
      </div>

      {selectedRadioProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Radio Button Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitRadio ${Object.entries(selectedRadioProps)
                .filter(([key]) => key !== 'options')
                .map(([key, value]) => `${key}="${value}"`)
                .join(' ')} options={[\n  ${selectedRadioProps.options
                .map((opt) => `{ label: "${opt.label}", value: "${opt.value}" }`)
                .join(',\n  ')}\n]} />`}
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

export default RadioViews;