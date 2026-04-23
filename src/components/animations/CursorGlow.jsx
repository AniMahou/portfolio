import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const CursorGlow = () => {
  const { x, y, isHovering } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('resize', checkTouch);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[1]"
      animate={{
        x: x - 200,
        y: y - 200,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
      style={{
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(108, 99, 255, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  );
};

export default CursorGlow;