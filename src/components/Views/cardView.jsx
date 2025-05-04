import React from 'react';
import UIKitCard from '../cards/cards';
import { UIKitIcons } from '../icons/UIKitIcons';


const CardView = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">✨ Cards ✨</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UIKitCard
          icon={UIKitIcons.coins}
          iconBgColor="bg-yellow-100"
          title="Earnings"
          subtitle="Monthly Revenue"
          rightValue="$5,400"
          rightLabel="+$500"
        />

        <UIKitCard
          icon={UIKitIcons.users}
          iconBgColor="bg-blue-100"
          title="Users"
          subtitle="Active Today"
          rightValue="1,200"
          rightLabel="+120"
        />

        <UIKitCard
          icon={UIKitIcons.growth}
          iconBgColor="bg-green-100"
          title="Growth"
          subtitle="This Month"
          rightValue="24%"
          rightLabel="+6%"
        />

        <UIKitCard
          icon={UIKitIcons.alert}
          iconBgColor="bg-red-100"
          title="Alerts"
          subtitle="System Warnings"
          rightValue="8"
          rightLabel="2 New"
        />
      </div>
    </div>
  );
};

export default CardView;
