import React from 'react';
import UIKitAvatar from '../Avatar/avatar';

const AvatarView = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Team Members</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Avatar 1 */}
        <div className="flex flex-col items-center space-y-2">
          <UIKitAvatar
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah Connor"
            size="xl"
            border={true}
            status="online"
          />
          <p className="text-sm text-gray-600">Sarah Connor</p>
        </div>

        {/* Avatar 2 */}
        <div className="flex flex-col items-center space-y-2">
          <UIKitAvatar
            alt="John Doe"
            size="lg"
            fallback="JD"
            border={true}
            status="busy"
          />
          <p className="text-sm text-gray-600">John Doe</p>
        </div>

        {/* Avatar 3 */}
        <div className="flex flex-col items-center space-y-2">
          <UIKitAvatar
            alt="No Image"
            size="lg"
            border={false}
            status="away"
          />
          <p className="text-sm text-gray-600">No Image</p>
        </div>

        {/* Avatar 4 */}
        <div className="flex flex-col items-center space-y-2">
          <UIKitAvatar
            src="https://randomuser.me/api/portraits/men/12.jpg"
            alt="David"
            size="sm"
            border={true}
            status="offline"
          />
          <p className="text-sm text-gray-600">David</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarView;
