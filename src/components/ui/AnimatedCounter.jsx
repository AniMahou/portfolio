import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2,
  className = '',
}) => {
  const { ref, hasBeenInView } = useInView({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!hasBeenInView) return;

    const numericValue = parseInt(value);
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      
      if (progress < 1) {
        setDisplayValue(Math.floor(progress * numericValue));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasBeenInView, value, duration]);

  const springValue = useSpring(0, { stiffness: 100, damping: 30 });
  
  useEffect(() => {
    springValue.set(displayValue);
  }, [displayValue, springValue]);

  const display = useTransform(springValue, (val) => Math.floor(val));

  return (
    <div ref={ref} className={`flex items-baseline gap-1 ${className}`}>
      {prefix && <span className="text-inherit">{prefix}</span>}
      <motion.span className="font-bold">
        {hasBeenInView ? display : '0'}
      </motion.span>
      {suffix && <span className="text-inherit">{suffix}</span>}
    </div>
  );
};

export default AnimatedCounter;