import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  target,
  rel,
  type = 'button',
  download,
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-accent hover:bg-accent-light text-white shadow-lg shadow-accent/25 hover:shadow-accent/40',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30',
    outline: 'bg-transparent hover:bg-accent/10 text-accent border border-accent/50 hover:border-accent',
    ghost: 'bg-transparent hover:bg-white/5 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
    xl: 'px-9 py-4 text-xl',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -2 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : 20} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : 20} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        download={download}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      type={type}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;