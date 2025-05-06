// src/components/progressView.jsx
import React from 'react';
import { UIKitTable } from '../Table/table';


export const ProgressView = () => {
  return (
    <div className="space-y-10 p-6">
      <h2 className="text-3xl font-bold text-center text-[#4B5EAA]">Progress Bars Showcase</h2>

      {/* LINEAR PROGRESS BARS */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#4B5EAA]">Linear Progress</h3>

        <UIKitProgress type="linear" progress={100} color="#4B5EAA" height={14} />
        <UIKitProgress type="linear" progress={85} color="green" height={12} />
        <UIKitProgress type="linear" progress={60} color="orange" height={10} />
        <UIKitProgress type="linear" progress={35} color="red" height={8} />
      </div>

      {/* CIRCULAR PROGRESS BARS */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-[#4B5EAA]">Circular Progress</h3>

        <div className="flex flex-wrap gap-10 items-center justify-center">
          <div className="flex flex-col items-center">
            <UIKitProgress type="circular" progress={100} color="#4B5EAA" size={80} />
            <span className="mt-2 font-medium text-sm">100% Complete</span>
          </div>

          <div className="flex flex-col items-center">
            <UIKitProgress type="circular" progress={75} color="green" size={70} />
            <span className="mt-2 font-medium text-sm">75%</span>
          </div>

          <div className="flex flex-col items-center">
            <UIKitProgress type="circular" progress={50} color="orange" size={65} />
            <span className="mt-2 font-medium text-sm">50%</span>
          </div>

          <div className="flex flex-col items-center">
            <UIKitProgress type="circular" progress={30} color="red" size={60} />
            <span className="mt-2 font-medium text-sm">30%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
