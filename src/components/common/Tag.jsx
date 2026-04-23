import React from 'react';
import { motion } from 'framer-motion';

const Tag = ({ children, color = 'accent', size = 'sm', className = '', onClick }) => {
  const colors = {
    accent: 'bg-accent/10 text-accent border-accent/30',
    green: 'bg-green-500/10 text-green-400 border-green-500/30',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    red: 'bg-red-500/10 text-red-400 border-red-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    pink: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    gray: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
  };

  const sizes = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-1.5 text-base',
  };

  const classes = `inline-flex items-center gap-1 font-medium border rounded-full ${colors[color]} ${sizes[size]} ${className}`;

  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
};

export default Tag;