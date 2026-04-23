import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ 
  children, 
  as: Tag = 'h1', 
  className = '', 
  delay = 0,
  staggerChildren = 0.03,
  once = true,
}) => {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerChildren,
        delayChildren: delay * i,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const MotionTag = motion[Tag] || motion.h1;

  if (!text) {
    return (
      <Tag className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default TextReveal;