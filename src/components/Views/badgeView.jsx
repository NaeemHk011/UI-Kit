
import React from 'react';
import UIKitBadge from '../Badge/badge';

const BadgeView = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Standalone Badges */}
      <div className="flex space-x-4">
        <UIKitBadge status="success" text="Completed" />
        <UIKitBadge status="error" text="Failed" />
        <UIKitBadge status="warning" text="Pending" />
        <UIKitBadge status="processing" text="In Progress" />
        <UIKitBadge status="primary" text="New" />
        <UIKitBadge status="secondary" text="Updated" />
        <UIKitBadge status="default" text="Default" />
      </div>

      {/* Badges with Children */}
      <div className="flex space-x-4">
        <UIKitBadge status="success" text="Active" offset={[10, -10]}>
          <img
            src="https://via.placeholder.com/50"
            alt="Icon"
            className="w-12 h-12 rounded-full"
          />
        </UIKitBadge>
        <UIKitBadge status="error" text="Error" offset={[-5, 5]}>
          <span className="inline-block p-2 bg-gray-200 rounded">
            Item
          </span>
        </UIKitBadge>
      </div>
    </div>
  );
};

export default BadgeView;















