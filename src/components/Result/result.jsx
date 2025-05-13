import React from "react";

const UIKitResult = ({
  iconSize = "w-16 h-16",
  circleSize = "w-28 h-28",
  message = "Success",
  messageColor = "text-gray-800",
  messageFontSize = "text-base",
  messageFontFamily = "font-sans",
  editableMessage = false,

  // ✅ Props for sub-message
  subMessage = "This is your result message",
  editableSubMessage = false,
  subMessageColor = "text-gray-600",
  subMessageFontSize = "text-sm",
  subMessageFontFamily = "font-sans",

  buttonText = "Close",
  buttonFontSize = "text-sm",
  buttonTextColor = "text-white",
  buttonBgColor = "bg-green-500",
  hoverEffect = "hover:bg-green-600",
  buttonWidth = "w-20",
  buttonHeight = "h-7", // Reduced height
  buttonMargin = "mt-3",
  buttonPadding = "px-3 py-1",
  onClose,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Spinner and icon */}
      <div className="relative">
        <div
          className={`absolute top-0 left-0 ${circleSize} rounded-full border-4 border-green-300 animate-spin`}
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className={`absolute top-0 left-0 ${circleSize} rounded-full border-4 border-green-200 animate-spin scale-x-[-1]`}
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className={`relative z-10 flex items-center justify-center ${circleSize} rounded-full border-4 border-green-500 bg-green-50`}
        >
          <svg
            className={iconSize}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="48" fill="#e6ffef" stroke="#4ade80" strokeWidth="4" />
            <path
              d="M30 52 L45 65 L70 35"
              fill="none"
              stroke="#22c55e"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Main message */}
      {editableMessage ? (
        <input
          type="text"
          defaultValue={message}
          className={`${messageColor} ${messageFontSize} ${messageFontFamily} mt-4 text-center`}
        />
      ) : (
        <p className={`${messageColor} ${messageFontSize} ${messageFontFamily} mt-4`}>
          {message}
        </p>
      )}

      {/* ✅ Sub-message below */}
      {editableSubMessage ? (
        <input
          type="text"
          defaultValue={subMessage}
          className={`${subMessageColor} ${subMessageFontSize} ${subMessageFontFamily} mt-1 text-center`}
        />
      ) : (
        <p className={`${subMessageColor} ${subMessageFontSize} ${subMessageFontFamily} mt-1`}>
          {subMessage}
        </p>
      )}

      {/* Button with hover */}
      <button
        className={`rounded ${buttonFontSize} ${buttonTextColor} ${buttonBgColor} ${hoverEffect} ${buttonWidth} ${buttonHeight} ${buttonMargin} ${buttonPadding}`}
        onClick={onClose}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default UIKitResult;
