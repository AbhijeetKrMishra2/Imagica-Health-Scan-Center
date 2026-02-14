
import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', className = '' }) => {
  const containerSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const stemSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`relative group ${className} ${containerSizes[size]}`}>
      {/* Outer Golden Glow Animation */}
      <div className={`absolute inset-0 bg-amber-500 rounded-xl animate-golden-breathe`}></div>
      
      {/* Main Logo Body - Golden Metallic Gradient Base */}
      <div className={`relative w-full h-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 rounded-xl flex flex-col items-center justify-center overflow-hidden logo-gold-glow transition-transform group-hover:scale-105 shadow-2xl border border-amber-200/50`}>
        
        {/* Golden Shimmer Animation Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-shimmer-gold"></div>
        </div>

        {/* The 'i' Stem - Metallic Silver Color - Providing strong contrast on gold */}
        <div className="relative z-10 flex flex-col items-center -mt-1">
          <span 
            className={`${stemSizes[size]} leading-[0.8] select-none tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] font-black bg-gradient-to-b from-slate-50 to-slate-300 bg-clip-text text-transparent`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ı
          </span>
          {/* The Stylized Dot Below the Line - Polished Silver */}
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-slate-100 to-slate-400 rounded-full mt-0.5 animate-dot shadow-lg border border-white/20"></div>
        </div>

        {/* Subtle white lens flare for metallic feel */}
        <div className="absolute top-1 right-1 w-2 h-2 bg-white/40 rounded-full blur-[1px]"></div>
      </div>
    </div>
  );
};

export default BrandLogo;