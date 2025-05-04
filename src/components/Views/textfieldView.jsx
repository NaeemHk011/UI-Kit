import React, { useState } from 'react';
import UIKitTextfield from '../Textfield/Textfield';

const TextView = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');

  return (
    <div className="max-w-xl mx-auto space-y-6 p-6 bg-white rounded-xl shadow-md">
      
      {/* Section Heading */}
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">✨ Beautiful Text Fields Showcase</h2>

      <UIKitTextfield
        label="Full Name"
        placeholder="Enter your full name"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        name="fullName"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <UIKitTextfield
        label="Email Address"
        placeholder="you@example.com"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        name="email"
        type="email"
        className="w-full px-4 py-2 border border-blue-400 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <UIKitTextfield
        label="Search"
        placeholder="Search here..."
        value={text3}
        onChange={(e) => setText3(e.target.value)}
        name="search"
        className="w-full px-4 py-2 border border-purple-400 bg-purple-50 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <UIKitTextfield
        label="Disabled Field"
        placeholder="Can't type here"
        value={text4}
        onChange={(e) => setText4(e.target.value)}
        name="disabled"
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 cursor-not-allowed"
        disabled
      />
      
    </div>
  );
};

export default TextView;
