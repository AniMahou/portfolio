import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scaleX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    scaleX.set(scrollProgress / 100);
  }, [scrollProgress, scaleX]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]">
      <motion.div
        className="h-full bg-gradient-to-r from-accent via-purple-400 to-accent"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5" />
    </div>
  );
};

export default ScrollProgress;