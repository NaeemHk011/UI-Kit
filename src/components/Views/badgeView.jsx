import React from "react";
import UIKitBadge from "../Badge/badge";
import { AiFillBell, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";

const BadgeView = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-md w-full max-w-md mx-auto space-y-6 text-center">
      <h1 className="text-xl font-bold text-gray-800">Various Badges</h1>

      {/* 🔔 Bell Badge with Count */}
      <UIKitBadge count={99}>
        <AiFillBell size={40} className="text-gray-300" />
      </UIKitBadge>

      {/* 💬 Messenger Badge with Dot */}
      <UIKitBadge dot>
        <AiOutlineMessage size={40} className="text-gray-300" />
      </UIKitBadge>

      {/* 👤 Avatar with Count */}
      <UIKitBadge count={7}>
        <AiOutlineUser size={40} className="text-gray-300" />
      </UIKitBadge>
    </div>
  );
};

export default BadgeView;
