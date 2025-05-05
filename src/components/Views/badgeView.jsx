import React from 'react';
import UIKitBadge from '../Badge/badge';

const BadgeView = () => {
  const badgeData = [
    { 
      count: 5, 
      size: 'small', 
      color: 'bg-primary', 
      position: 'topRight', 
      avatarSrc: 'https://via.placeholder.com/50/FF6F61/FFFFFF?text=A', 
      avatarAlt: 'User A' 
    },
    { 
      count: 3, 
      size: 'medium', 
      color: 'bg-danger', 
      position: 'bottomRight', 
      icon: '🔔' 
    },
    { 
      count: 10, 
      size: 'large', 
      color: 'bg-success', 
      position: 'topLeft', 
      avatarSrc: 'https://via.placeholder.com/50/6B7280/FFFFFF?text=B', 
      avatarAlt: 'User B' 
    },
    { 
      count: 99, 
      size: 'small', 
      color: 'bg-warning', 
      position: 'bottomLeft', 
      icon: '📧' 
    }
  ];

  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg max-w-md w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Customizable Badges</h1>
      <p className="text-center mb-4 text-gray-600">Use the <code className="font-semibold">UIKitBadge</code> component to display badges with customizable options such as size, color, position, and avatars/icons.</p>
      <div className="text-sm text-center mb-6">
        <p className="text-gray-700">Try passing props like <code className="font-semibold">count</code>, <code className="font-semibold">size</code>, <code className="font-semibold">color</code>, <code className="font-semibold">position</code>, <code className="font-semibold">avatarSrc</code>, <code className="font-semibold">avatarAlt</code>, and <code className="font-semibold">icon</code> to customize your badge.</p>
      </div>
      <div className="flex justify-center gap-6">
        {badgeData.map((badge, index) => (
          <div key={index} className="mb-6">
            <UIKitBadge 
              count={badge.count}
              size={badge.size}
              color={badge.color}
              position={badge.position}
              avatarSrc={badge.avatarSrc}
              avatarAlt={badge.avatarAlt}
              icon={badge.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeView;
