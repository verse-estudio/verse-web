import React, { useEffect, useState } from 'react';

const CyanCursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    // Only activate for non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target;
      const clickable = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      );
      setIsHoveringClickable(!!clickable);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const loop = () => {
      // Lerp for smooth ethereal trailing motion
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Outer Cyan Bioluminescent Ambient Aura */}
      <div 
        className="absolute rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHoveringClickable ? '240px' : '180px',
          height: isHoveringClickable ? '240px' : '180px',
          background: 'radial-gradient(circle, rgba(30, 207, 248, 0.22) 0%, rgba(30, 207, 248, 0.08) 40%, rgba(2, 30, 115, 0) 70%)',
          filter: 'blur(20px)',
        }}
      />
      {/* Intense Core Spark */}
      <div 
        className="absolute rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHoveringClickable ? '14px' : '8px',
          height: isHoveringClickable ? '14px' : '8px',
          backgroundColor: '#1ECFF8',
          boxShadow: '0 0 16px 3px rgba(30, 207, 248, 0.9), 0 0 30px 6px rgba(0, 63, 246, 0.5)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </div>
  );
};

export default CyanCursorGlow;
