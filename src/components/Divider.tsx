import React from 'react'

export default function Divider() {
  return (
    <div className="flex pt-16 justify-center items-center">
      <div className="w-32 h-1 bg-green-500 rounded-full"></div>
      <span className="mx-4 text-2xl">🌱</span>
      <div className="w-32 h-1 bg-green-500 rounded-full"></div>
    </div>
  );
}
