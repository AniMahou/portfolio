import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent hover:bg-accent/30 hover:border-accent/50 transition-all duration-300 shadow-lg shadow-accent/10"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;