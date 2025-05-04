import React, { useState } from 'react';
import UIKitInput from '../input/Input';

const InputView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [short, setShort] = useState('');

  return (
    <div className="space-y-6 p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">✨ Input Fields ✨</h2>



      {/* Name  */}
      <UIKitInput
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Full Name"
        name="name"
      />

      {/* Email  */}
      <UIKitInput
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email Address"
        name="email"
        error={email && !email.includes('@') ? 'Invalid email address' : ''}
      />

      {/* Password Input with toggle */}
      <UIKitInput
        type="password"
        placeholder="Create a strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        name="password"
        isPasswordToggle={true}
      />

      {/* Small Input */}
      <UIKitInput
        type="text"
        placeholder="Short input"
        value={short}
        onChange={(e) => setShort(e.target.value)}
        name="short"
        label="Short Field"
        className="w-40 h-8 text-sm"
      />
    </div>
  );
};

export default InputView;
