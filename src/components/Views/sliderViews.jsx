import React, { useState } from 'react';
import UIKitSlider from '../Slider/UIKitSlider';

const SliderView = () => {
  const [sliderValue, setSliderValue] = useState(60);

  return (
    <div className="w-full p-4">
      <div className="text-md font-medium text-gray-800 mb-2 flex justify-between">
        <span>Range</span>
        <span className="text-gray-600 text-sm">(0% - 100%)</span>
      </div>
      <UIKitSlider
        value={sliderValue}
        onChange={setSliderValue}
        min={0}
        max={100}
        step={1}
        showValue={true}
        unit="%"
        color="green"
        scalePoints={[25, 50, 75]} // 4 points + min/max = 5 total
        scaleLabelFontSize="12px"
        scaleLabelColor="gray-600"
        scaleSpacing="10px"
      />
    </div>
  );
};

export default SliderView;