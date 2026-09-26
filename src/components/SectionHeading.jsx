import React from 'react';

const SectionHeading = ({ title, subtitle, className = '' }) => {
  let renderTitle = title;
  if (typeof title === 'string' && title.length > 0) {
    const firstChar = title.charAt(0);
    const rest = title.slice(1);
    renderTitle = (
      <>
        <span className="font-decorative text-4xl md:text-6xl text-verse-cyan font-normal mr-0.5 inline-block">
          {firstChar}
        </span>
        <span className="font-sans font-black tracking-tight">{rest}</span>
      </>
    );
  }

  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
        {renderTitle}
      </h2>
      {subtitle && (
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
