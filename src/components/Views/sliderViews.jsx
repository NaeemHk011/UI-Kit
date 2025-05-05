import React, { useState } from 'react';
import UIKitSlider from '../Slider/UIKitSlider';

const SliderView = () => {
  const [sliderValue1, setSliderValue1] = useState(25);
  const [sliderValue2, setSliderValue2] = useState(50);
  const [sliderValue3, setSliderValue3] = useState(75);

  return (
    <div className="space-y-6 p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">✨ Slider Showcase ✨</h2>

      {/* Slider 1: Value range from 0 to 100 */}
      <UIKitSlider
        value={sliderValue1}
        onChange={setSliderValue1}
        min={0}
        max={100}
        step={1}
        showValue={true}
        unit="%"
        color="blue" // Blue thumb color
        label="Slider 1: Custom Range (0-100)"
        height="12px"
        thumbSize="24px"
        className="mt-4"
      />

      {/* Slider 2: Value range from 0 to 200 */}
      <UIKitSlider
        value={sliderValue2}
        onChange={setSliderValue2}
        min={0}
        max={200}
        step={5}
        showValue={true}
        unit="kg"
        color="blue" // Blue thumb color
        label="Slider 2: Weight (0-200 kg)"
        height="10px"
        thumbSize="18px"
        className="mt-4"
      />

      {/* Slider 3: Value range from 0 to 500 */}
      <UIKitSlider
        value={sliderValue3}
        onChange={setSliderValue3}
        min={0}
        max={500}
        step={10}
        showValue={true}
        unit="m"
        color="blue" // Blue thumb color
        label="Slider 3: Distance (0-500 meters)"
        height="14px"
        thumbSize="26px"
        className="mt-4"
      />
    </div>
  );
};

export default SliderView;
