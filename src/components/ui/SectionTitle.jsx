import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  icon,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const alignmentClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      className={`mb-16 ${alignmentClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon with glow */}
      {icon && (
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="text-3xl">{icon}</span>
        </motion.div>
      )}

      {/* Title */}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${titleClassName}`}>
        <span className="gradient-text">{title}</span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-gray-400 text-base sm:text-lg max-w-2xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      <motion.div
        className="h-1 w-20 bg-gradient-to-r from-accent to-purple-400 rounded-full mt-6"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default SectionTitle;