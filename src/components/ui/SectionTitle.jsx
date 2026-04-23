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
      className={`section-title-spacing ${alignmentClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon with glow - BIGGER */}
      {icon && (
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-accent/10 border border-accent/20 mb-8"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="text-4xl sm:text-5xl">{icon}</span>
        </motion.div>
      )}

      {/* Title - BIGGER */}
      <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${titleClassName}`}>
        <span className="gradient-text">{title}</span>
      </h2>

      {/* Subtitle - BIGGER */}
      {subtitle && (
        <p className={`text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      <motion.div
        className="h-1.5 w-24 sm:w-32 bg-gradient-to-r from-accent to-purple-400 rounded-full mt-8"
        initial={{ width: 0 }}
        whileInView={{ width: 128 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default SectionTitle;