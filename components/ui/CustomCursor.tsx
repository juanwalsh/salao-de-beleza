import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // Disable on touch devices

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* 
         Reverted to bg-lumiere-900 (Black/Dark).
         Added border-lumiere-50 (White/Off-white) to ensure visibility on the dark modal.
         Removed mix-blend-difference.
      */}
      <div 
        className="fixed w-3 h-3 bg-lumiere-900 border border-lumiere-50 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 shadow-sm"
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
};

export default CustomCursor;