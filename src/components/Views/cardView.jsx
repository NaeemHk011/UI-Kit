import React, { useState } from 'react';
import UIKitCard from '../cards/cards';
import { UIKitIcons } from '../icons/UIKitIcons';

const CardView = () => {
  const [selectedCardProps, setSelectedCardProps] = useState(null);

  const cards = [
    {
      icon: UIKitIcons.coins,
      iconBgColor: "bg-yellow-100",
      title: "Earnings",
      subtitle: "Monthly Revenue",
      rightValue: "$5,400",
      rightLabel: "+$500"
    },
    {
      icon: UIKitIcons.users,
      iconBgColor: "bg-blue-100",
      title: "Users",
      subtitle: "Active Today",
      rightValue: "1,200",
      rightLabel: "+120"
    },
    {
      icon: UIKitIcons.growth,
      iconBgColor: "bg-green-100",
      title: "Growth",
      subtitle: "This Month",
      rightValue: "24%",
      rightLabel: "+6%"
    },
    {
      icon: UIKitIcons.alert,
      iconBgColor: "bg-red-100",
      title: "Alerts",
      subtitle: "System Warnings",
      rightValue: "8",
      rightLabel: "2 New",
      className: "h-24"
    },
    {
      title: "Nature Escape",
      subtitle: "Tranquil Lake View",
      rightValue: "",
      rightLabel: "",
      imageSrc: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      badgeText: "New",
      createdDate: "May 7, 2025",
      className: "w-60 h-64"
    },
    {
      title: "Nature Escape",
      subtitle: "Animated only",
      rightValue: "",
      rightLabel: "",
      imageSrc: "https://media.licdn.com/dms/image/v2/D4D12AQGHc-BpS9ijGg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723716716408?e=2147483647&v=beta&t=wPdsY-qk4j3bFIx1yYRsVLyMG1Kqg4j9chRZDQ5yjdY",
      badgeText: "Expired",
      createdDate: "May 7, 2025",
      className: "w-60 h-64"
    }
  ];

  const handleCardClick = (props) => {
    setSelectedCardProps(props);
  };

  const handleCopy = () => {
    if (selectedCardProps) {
      const propsToCopy = { ...selectedCardProps };
      if (propsToCopy.icon) {
        const iconKey = Object.keys(UIKitIcons).find(key => UIKitIcons[key] === propsToCopy.icon);
        propsToCopy.icon = iconKey ? `UIKitIcons.${iconKey}` : 'undefined';
      }
      const propsString = `<UIKitCard ${Object.entries(propsToCopy)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedCardProps(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">✨ Cards ✨</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((cardProps, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleCardClick(cardProps)}
          >
            <UIKitCard {...cardProps} />
          </div>
        ))}
      </div>

      {selectedCardProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Card Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitCard ${Object.entries({
                ...selectedCardProps,
                icon: selectedCardProps.icon
                  ? Object.keys(UIKitIcons).find(key => UIKitIcons[key] === selectedCardProps.icon)
                    ? `UIKitIcons.${Object.keys(UIKitIcons).find(key => UIKitIcons[key] === selectedCardProps.icon)}`
                    : 'undefined'
                  : undefined
              })
                .filter(([_, value]) => value !== undefined)
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

export default CardView;
