'use client';

import { Anchor } from 'lucide-react';

export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Container - Fixed Positioning */}
      <div className="relative flex items-center justify-center h-10 w-10 flex-shrink-0">
        {/* Gradient Badge Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg"></div>
        
        {/* Anchor Icon */}
        <Anchor className="w-5 h-5 text-white relative z-10 stroke-[2.5]" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-black text-primary">
          PUBALI
        </span>
        <span className="text-xs font-bold text-accent tracking-wider">
          LOGISTIC
        </span>
      </div>
    </div>
  );
}
