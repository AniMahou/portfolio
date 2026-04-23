import React from 'react';
import { motion } from 'framer-motion';

const FadeInWhenVisible = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  distance = 50,
  className = '',
  once = true,
  threshold = 0.2,
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;