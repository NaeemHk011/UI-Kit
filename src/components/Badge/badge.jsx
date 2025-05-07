import React from "react";

const UIKitBadge = ({ count = 0, maxCount = 99, children, dot = false }) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count;

  return (
    <div className="relative inline-block">
      {children}
      {(dot || count > 0) && (
        <span
          className={`absolute -top-1 -right-1 ${
            dot ? "w-[10px] h-[10px]" : "min-w-[20px] h-[20px] px-[6px] text-[11px]"
          } bg-[#fa541c] text-white rounded-full flex items-center justify-center font-semibold shadow`}
        >
          {!dot && displayCount}
        </span>
      )}
    </div>
  );
};

export default UIKitBadge;
