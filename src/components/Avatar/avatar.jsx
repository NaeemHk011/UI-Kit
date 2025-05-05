import React from 'react';

const UIKitAvatar = () => {
  const avatars = [
    { src: '/user1.jpg', alt: 'Ali' },
    { src: '/user2.jpg', alt: 'Sara' },
    { icon: '👤', alt: 'Guest' },
    { src: '/user4.jpg', alt: 'Raza' },
    { src: '/user5.jpg', alt: 'Noor' },
  ];

  return (
    <div className="p-4">
      {/* Passing props to AvatarView child component */}
      <AvatarView
        avatars={avatars}           // List of avatars
        maxVisible={3}              // How many avatars to show
        variant="rounded"           // Avatar shape
        size="md"                   // Avatar size
        heading="✨ Our Lovely Team ✨"  // Custom heading for the section
      />
    </div>
  );
};

export default UIKitAvatar;
