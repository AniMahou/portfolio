import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '../../utils/animationVariants';

const Card = ({ 
  children, 
  className = '', 
  onClick,
  hover = true,
  padding = 'md',
  variant = 'default',
}) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const variants = {
    default: 'bg-dark-card/50 backdrop-blur-sm border border-white/10',
    glass: 'bg-white/5 backdrop-blur-lg border border-white/10',
    solid: 'bg-dark-card border border-white/5',
    gradient: 'bg-gradient-to-br from-dark-card to-accent/5 border border-accent/10',
  };

  const classes = `
    rounded-2xl 
    ${paddings[padding]} 
    ${variants[variant]} 
    ${hover ? 'hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300' : ''} 
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      className={classes}
      onClick={onClick}
      {...(hover ? cardHover : {})}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Component>
  );
};

export default Card;