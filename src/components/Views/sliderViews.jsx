import React, { useState } from 'react';
import UIKitSlider from '../Slider/UIKitSlider';

const SliderView = () => {
  const [sliderValue1, setSliderValue1] = useState(25);
  const [sliderValue2, setSliderValue2] = useState(50);
  const [sliderValue3, setSliderValue3] = useState(75);
  const [selectedSliderProps, setSelectedSliderProps] = useState(null);

  const sliders = [
    {
      min: 0,
      max: 100,
      step: 1,
      showValue: true,
      unit: '%',
      color: 'blue',
      label: 'Slider 1: Custom Range (0-100)',
      height: '12px',
      thumbSize: '24px',
      className: 'mt-4'
    },
    {
      min: 0,
      max: 200,
      step: 5,
      showValue: true,
      unit: 'kg',
      color: 'blue',
      label: 'Slider 2: Weight (0-200 kg)',
      height: '10px',
      thumbSize: '18px',
      className: 'mt-4'
    },
    {
      min: 0,
      max: 500,
      step: 10,
      showValue: true,
      unit: 'm',
      color: 'blue',
      label: 'Slider 3: Distance (0-500 meters)',
      height: '14px',
      thumbSize: '26px',
      className: 'mt-4'
    }
  ];

  const handleSliderClick = (props) => {
    setSelectedSliderProps(props);
  };

  const handleCopy = () => {
    if (selectedSliderProps) {
      const propsString = `<UIKitSlider ${Object.entries(selectedSliderProps)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedSliderProps(null);
  };

  return (
    <div className="space-y-6 p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">✨ Slider Showcase ✨</h2>
      {sliders.map((sliderProps, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => handleSliderClick(sliderProps)}
        >
          <UIKitSlider
            value={
              index === 0 ? sliderValue1 : index === 1 ? sliderValue2 : sliderValue3
            }
            onChange={
              index === 0 ? setSliderValue1 : index === 1 ? setSliderValue2 : setSliderValue3
            }
            {...sliderProps}
          />
        </div>
      ))}

      {selectedSliderProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Slider Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitSlider ${Object.entries(selectedSliderProps)
                .map(([key, value]) => `${key}="${value}"`)
                .join(' ')} />`}
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

export default SliderView;