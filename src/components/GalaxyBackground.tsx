import React from 'react';

export function GalaxyBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#0B0B1E]" />
      <div className="stars absolute inset-0" />
      <div className="twinkling absolute inset-0" />
      <div className="nebula absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/20" />
    </div>
  );
}