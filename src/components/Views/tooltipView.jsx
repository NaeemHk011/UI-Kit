import React from 'react';
import UIKitTooltip from '../Tooltip/toolTip';

const TooltipView = () => {
  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-[#4B5EAA] tracking-wide">
        Tooltip Showcase
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
        {/* Primary Tooltip */}
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Default Tooltip
          </h3>
          <UIKitTooltip message="Simple helpful tip!">
            <button
              className="px-6 py-3 bg-[#4B5EAA] text-white rounded-xl shadow-md hover:scale-105 transition duration-300"
            >
              Hover Me
            </button>
          </UIKitTooltip>
        </div>

        {/* Tooltip with icon */}
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Tooltip on Icon
          </h3>
          <UIKitTooltip message="Edit this item">
            <button className="p-3 bg-[#4B5EAA] text-white rounded-full shadow hover:bg-[#365fa9] transition">
              ✏️
            </button>
          </UIKitTooltip>
        </div>

        {/* Tooltip on disabled button */}
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Tooltip on Disabled Button
          </h3>
          <UIKitTooltip message="You can't click this!">
            <button
              disabled
              className="px-6 py-3 bg-gray-400 text-white rounded-lg opacity-70 cursor-not-allowed"
            >
              Disabled
            </button>
          </UIKitTooltip>
        </div>
      </div>
    </div>
  );
};

export default TooltipView;
