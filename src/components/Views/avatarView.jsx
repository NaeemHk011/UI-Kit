import React, { useState } from 'react';
import UIKitAvatar from '../Avatar/avatar';

const AvatarView = () => {
  const [selectedAvatarProps, setSelectedAvatarProps] = useState(null);

  const avatars = [
    {
      src: 'https://randomuser.me/api/portraits/women/44.jpg',
      alt: 'Sarah Connor',
      size: 'xl',
      border: true,
      status: 'online',
      name: 'Sarah Connor'
    },
    {
      alt: 'John Doe',
      size: 'lg',
      fallback: 'JD',
      border: true,
      status: 'busy',
      name: 'John Doe'
    },
    {
      alt: 'No Image',
      size: 'lg',
      border: false,
      status: 'away',
      name: 'No Image'
    },
    {
      src: 'https://randomuser.me/api/portraits/men/12.jpg',
      alt: 'David',
      size: 'sm',
      border: true,
      status: 'offline',
      name: 'David'
    }
  ];

  const handleAvatarClick = (props) => {
    setSelectedAvatarProps(props);
  };

  const handleCopy = () => {
    if (selectedAvatarProps) {
      const propsString = `<UIKitAvatar ${Object.entries(selectedAvatarProps)
        .filter(([key]) => key !== 'name')
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')} />`;
      navigator.clipboard.writeText(propsString);
    }
  };

  const closeModal = () => {
    setSelectedAvatarProps(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Team Members</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {avatars.map((avatarProps, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => handleAvatarClick(avatarProps)}
          >
            <UIKitAvatar
              src={avatarProps.src}
              alt={avatarProps.alt}
              size={avatarProps.size}
              fallback={avatarProps.fallback}
              border={avatarProps.border}
              status={avatarProps.status}
            />
            <p className="text-sm text-gray-600">{avatarProps.name}</p>
          </div>
        ))}
      </div>

      {selectedAvatarProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Avatar Props</h2>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-auto max-h-96">
              {`<UIKitAvatar ${Object.entries(selectedAvatarProps)
                .filter(([key]) => key !== 'name')
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

export default AvatarView;