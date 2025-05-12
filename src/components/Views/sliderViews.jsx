
// import { useState, useRef } from 'react';
// import UIKitSlider from '../Slider/UIKitSlider';

// const SliderView = ({
//   trackColor = '#4B5EAA',
//   thumbColor = '#4B5EAA',
//   pointHoverColor = '#4B5EAA',
//   width = 'w-80',
//   height = 'h-2'
// }) => {
//   const [value, setValue] = useState(50);
//   const sliderRef = useRef(null);

//   const handleSliderChange = (e) => {
//     const slider = sliderRef.current;
//     const rect = slider.getBoundingClientRect();
//     const newValue = Math.round(
//       ((e.clientX - rect.left) / rect.width) * 100
//     );
//     setValue(Math.max(0, Math.min(100, newValue)));
//   };

//   const handlePointClick = (point) => {
//     setValue(point);
//   };

//   return (
//     <UIKitSlider
//       value={value}
//       onSliderChange={handleSliderChange}
//       onPointClick={handlePointClick}
//       sliderRef={sliderRef}
//       trackColor={trackColor}
//       thumbColor={thumbColor}
//       pointHoverColor={pointHoverColor}
//       width={width}
//       height={height}
//     />
//   );
// };

// export default SliderView;







import { useState, useRef } from 'react';
import UIKitSlider from '../Slider/UIKitSlider';

const SliderView = ({
  trackColor = '#4B5EAA',
  thumbColor = '#4B5EAA',
  pointHoverColor = '#4B5EAA',
  width = 'w-80',
  height = 'h-2',
  showScale = true // New prop to pass whether to show scale or not
}) => {
  const [value, setValue] = useState(50);
  const sliderRef = useRef(null);

  const handleSliderChange = (e) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const newValue = Math.round(
      ((e.clientX - rect.left) / rect.width) * 100
    );
    setValue(Math.max(0, Math.min(100, newValue)));
  };

  const handlePointClick = (point) => {
    setValue(point);
  };

  return (
    <UIKitSlider
      value={value}
      onSliderChange={handleSliderChange}
      onPointClick={handlePointClick}
      sliderRef={sliderRef}
      trackColor={trackColor}
      thumbColor={thumbColor}
      pointHoverColor={pointHoverColor}
      width={width}
      height={height}
      showScale={showScale}
    />
  );
};

export default SliderView;
