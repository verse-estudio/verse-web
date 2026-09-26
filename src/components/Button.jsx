import React from 'react';

const Button = ({ children, primary, mystic, onClick, className = '', type = 'button' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none cursor-pointer tracking-wider text-xs uppercase";
  
  // Official mystical gradient: from #ed622e to #ffd213 with intense glow
  const primaryStyle = "bg-gradient-to-r from-verse-orange to-verse-yellow text-verse-bg font-black shadow-[0_4px_20px_rgba(237,98,46,0.4)] hover:shadow-[0_0_35px_rgba(237,98,46,0.7)]";
  
  // High-impact mystic CTA button
  const mysticStyle = "bg-gradient-to-r from-verse-orange via-verse-yellow to-verse-cyan text-verse-bg font-black px-8 py-4 text-sm shadow-[0_0_30px_rgba(237,98,46,0.5)] hover:shadow-[0_0_45px_rgba(30,207,248,0.7)] hover:brightness-110";

  // Cyan bioluminescent secondary button
  const secondaryStyle = "border-2 border-verse-cyan text-verse-cyan bg-verse-cyan/5 hover:bg-verse-cyan hover:text-verse-bg hover:shadow-[0_0_25px_rgba(30,207,248,0.5)]";
  
  let variantStyle = secondaryStyle;
  if (mystic) variantStyle = mysticStyle;
  else if (primary) variantStyle = primaryStyle;

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
