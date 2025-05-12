

// const UIKitSlider = ({ value, onSliderChange, onPointClick, sliderRef, trackColor, thumbColor, pointHoverColor, width, height }) => {
//   const points = [25, 50, 75, 100];
//   const thumbSize = height === 'h-2' ? 'w-5 h-5' : height === 'h-3' ? 'w-7 h-7' : 'w-9 h-9';
//   const thumbOffset = height === 'h-2' ? '-top-1.5' : height === 'h-3' ? '-top-2' : '-top-2.5';

//   return (
//     <div className={`${width} mx-auto py-6`}>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center tracking-tight">
//         Slider
//       </h2>
//       <div
//         ref={sliderRef}
//         className={`relative ${height} bg-gray-200 rounded-full cursor-pointer`}
//         onMouseDown={(e) => {
//           onSliderChange(e);
//           const handleMouseMove = (moveEvent) => onSliderChange(moveEvent);
//           const handleMouseUp = () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//           };
//           document.addEventListener('mousemove', handleMouseMove);
//           document.addEventListener('mouseup', handleMouseUp);
//         }}
//       >
//         <div
//           className={`absolute ${height} rounded-full transition-all duration-300 ease-out`}
//           style={{ width: `${value}%`, backgroundColor: trackColor }}
//         />
//         <div
//           className={`absolute ${thumbSize} rounded-full ${thumbOffset} shadow-lg transform -translate-x-1/2 transition-all duration-300 ease-out cursor-grab active:cursor-grabbing`}
//           style={{ left: `${value}%`, backgroundColor: thumbColor }}
//         />
//       </div>
//       <div className="flex justify-between mt-4">
//         {points.map((point) => (
//           <button
//             key={point}
//             className="text-sm font-medium text-gray-600 cursor-pointer transition-colors duration-200"
//             style={{ '--tw-text-opacity': 1, color: `rgb(from ${pointHoverColor} r g b / var(--tw-text-opacity))` }}
//             onClick={() => onPointClick(point)}
//           >
//             {point}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UIKitSlider;
          






const UIKitSlider = ({
  value,
  onSliderChange,
  onPointClick,
  sliderRef,
  trackColor,
  thumbColor,
  pointHoverColor,
  width,
  height,
  showScale = true 
}) => {
  const points = [25, 50, 75, 100];
  const thumbSize = height === 'h-2' ? 'w-5 h-5' : height === 'h-3' ? 'w-7 h-7' : 'w-9 h-9';
  const thumbOffset = height === 'h-2' ? '-top-1.5' : height === 'h-3' ? '-top-2' : '-top-2.5';

  return (
    <div className={`${width} mx-auto py-6`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center tracking-tight">
        Slider
      </h2>
      <div
        ref={sliderRef}
        className={`relative ${height} bg-gray-200 rounded-full cursor-pointer`}
        onMouseDown={(e) => {
          onSliderChange(e);
          const handleMouseMove = (moveEvent) => onSliderChange(moveEvent);
          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }}
      >
        <div
          className={`absolute ${height} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${value}%`, backgroundColor: trackColor }}
        />
        <div
          className={`absolute ${thumbSize} rounded-full ${thumbOffset} shadow-lg transform -translate-x-1/2 transition-all duration-300 ease-out cursor-grab active:cursor-grabbing`}
          style={{ left: `${value}%`, backgroundColor: thumbColor }}
        />

        {/* Percentage fixed at right */}
        <span className="absolute right-0 -top-6 text-sm font-semibold text-green-600">
          {value}%
        </span>
      </div>

      {/* Conditionally render scale (buttons) */}
      {showScale && (
        <div className="flex justify-between mt-4">
          {points.map((point) => (
            <button
              key={point}
              className="text-sm font-medium text-gray-600 cursor-pointer transition-colors duration-200"
              style={{ '--tw-text-opacity': 1, color: `rgb(from ${pointHoverColor} r g b / var(--tw-text-opacity))` }}
              onClick={() => onPointClick(point)}
            >
              {point}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UIKitSlider;


