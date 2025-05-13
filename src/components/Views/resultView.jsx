import { useState } from "react";
import UIKitResult from "../Result/result";

const ResultView = ({
  iconSize = "w-16 h-16",
  circleSize = "w-28 h-28",
  message = "Success",
  messageColor = "text-gray-800",
  messageFontSize = "text-base",
  messageFontFamily = "font-sans",
  editableMessage = false,
  buttonText = "Close",
  buttonFontSize = "text-sm",
  buttonTextColor = "text-white",
  buttonBgColor = "bg-green-500",
  buttonWidth = "w-20",
  buttonHeight = "h-9",
  buttonMargin = "mt-3",
  buttonPadding = "px-3 py-2",
  onClose,
}) => {
  const [selectedResultProps, setSelectedResultProps] = useState(null);

  const resultProps = {
    iconSize,
    circleSize,
    message,
    messageColor,
    messageFontSize,
    messageFontFamily,
    editableMessage,
    buttonText,
    buttonFontSize,
    buttonTextColor,
    buttonBgColor,
    buttonWidth,
    buttonHeight,
    buttonMargin,
    buttonPadding,
    onClose: onClose ? '() => {}' : undefined,
  };

  const handleShowResultProps = (e) => {
    if (e.target.closest('button')) return;
    setSelectedResultProps(resultProps);
  };

  const handleCopyProps = () => {
    if (selectedResultProps) {
      const propsString = `<UIKitResult ${Object.entries(selectedResultProps)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${typeof value === 'string' ? `"${value}"` : `{${value}}`}`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedResultProps(null);
  };

  return (
    <div
      className="flex justify-center items-center p-6 cursor-pointer"
      onClick={handleShowResultProps}
    >
      <UIKitResult
        iconSize={iconSize}
        circleSize={circleSize}
        message={message}
        messageColor={messageColor}
        messageFontSize={messageFontSize}
        messageFontFamily={messageFontFamily}
        editableMessage={editableMessage}
        buttonText={buttonText}
        buttonFontSize={buttonFontSize}
        buttonTextColor={buttonTextColor}
        buttonBgColor={buttonBgColor}
        buttonWidth={buttonWidth}
        buttonHeight={buttonHeight}
        buttonMargin={buttonMargin}
        buttonPadding={buttonPadding}
        onClose={onClose}
      />
      {selectedResultProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Result Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitResult ${Object.entries(selectedResultProps)
                .filter(([key, value]) => value !== undefined)
                .map(([key, value]) => `${key}=${typeof value === 'string' ? `"${value}"` : `{${value}}`}`)
                .join(' ')} />`}
            </pre>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCopyProps}
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

export default ResultView;