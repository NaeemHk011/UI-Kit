
import React from 'react';

import UIKitBtn from './components/Button/button';
import UIKitCard from './components/cards/cards';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <UIKitBtn label='CLICK ME'  type='primary' style={{padding:'20px'}} className='primary'/>
      <UIKitCard
        icon={<FaCoins className="text-blue-500 text-xl" />}
        iconBgColor="bg-blue-100"
        title="32"
        subtitle="Total Expenses"
        rightValue="1"
        rightLabel="Total"
      />
  



    </div>
  );
};

export default App;

